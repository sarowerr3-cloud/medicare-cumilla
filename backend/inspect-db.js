import mongoose from 'mongoose';
import 'dotenv/config';

async function inspect() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        console.error("MONGODB_URI is not defined in backend/.env file.");
        process.exit(1);
    }
    
    console.log("Connecting to Cloud Database...");
    try {
        await mongoose.connect(uri);
        console.log("Connected successfully!");
        console.log(`Database Name: ${mongoose.connection.db.databaseName}\n`);

        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log("=== Collections ===");
        
        for (const col of collections) {
            const count = await mongoose.connection.db.collection(col.name).countDocuments();
            console.log(`\nCollection: ${col.name}`);
            console.log(`Document Count: ${count}`);
            
            if (count > 0) {
                const sample = await mongoose.connection.db.collection(col.name).findOne();
                console.log("Sample Document Structure:");
                console.log(JSON.stringify(sample, null, 2));
            } else {
                console.log("Sample Document: (empty)");
            }
            console.log("-----------------------------------------");
        }
        
        await mongoose.disconnect();
        console.log("\nDisconnected from Database.");
        process.exit(0);
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
}

inspect();
