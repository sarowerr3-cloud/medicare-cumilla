import mongoose from 'mongoose';
import 'dotenv/config';

const localUri = "mongodb://localhost:27017/MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM_DEPLOYED";
const cloudUri = "mongodb+srv://Sarower:%40Sarower17@cluster0.n0k8wab.mongodb.net/MEDICARE_CUMILLA?retryWrites=true&w=majority";

async function migrate() {
    try {
        console.log("Connecting to Local DB...");
        const localConn = await mongoose.createConnection(localUri).asPromise();
        console.log("Connecting to Cloud DB...");
        const cloudConn = await mongoose.createConnection(cloudUri).asPromise();

        const collections = ['doctors', 'services', 'appointments', 'serviceappointments'];
        
        for (const colName of collections) {
            console.log(`Migrating collection: ${colName}...`);
            const localCol = localConn.collection(colName);
            const cloudCol = cloudConn.collection(colName);

            const data = await localCol.find({}).toArray();
            if (data.length > 0) {
                console.log(`Found ${data.length} documents in ${colName}. Copying...`);
                // Clear cloud collection first to avoid duplicates if re-run
                await cloudCol.deleteMany({});
                await cloudCol.insertMany(data);
                console.log(`Successfully migrated ${colName}.`);
            } else {
                console.log(`No data found in ${colName}.`);
            }
        }

        console.log("Migration Complete!");
        process.exit(0);
    } catch (err) {
        console.error("Migration Failed:", err);
        process.exit(1);
    }
}

migrate();
