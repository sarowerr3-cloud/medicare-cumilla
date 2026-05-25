import mongoose from "mongoose";
import 'dotenv/config';

async function auditDBs() {
  const dbs = ["medicare", "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM_DEPLOYED"];
  for (const dbName of dbs) {
    const uri = `mongodb://localhost:27017/${dbName}`;
    try {
      await mongoose.connect(uri);
      const collections = await mongoose.connection.db.listCollections().toArray();
      console.log(`\n--- Database: ${dbName} ---`);
      for (const col of collections) {
        const count = await mongoose.connection.db.collection(col.name).countDocuments();
        console.log(` - ${col.name}: ${count} docs`);
      }
      await mongoose.disconnect();
    } catch (error) {
      console.error(`Error auditing ${dbName}:`, error);
    }
  }
}

auditDBs();
