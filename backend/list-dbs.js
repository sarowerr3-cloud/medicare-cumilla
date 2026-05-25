import mongoose from "mongoose";
import 'dotenv/config';

async function listDatabases() {
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/medicare";
  try {
    await mongoose.connect(uri);
    const admin = mongoose.connection.db.admin();
    const dbs = await admin.listDatabases();
    console.log("Databases:");
    dbs.databases.forEach(db => console.log(` - ${db.name}`));
    await mongoose.disconnect();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

listDatabases();
