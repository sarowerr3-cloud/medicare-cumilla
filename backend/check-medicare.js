import mongoose from "mongoose";
import 'dotenv/config';

async function checkCollections() {
  const uri = "mongodb://localhost:27017/medicare";
  try {
    await mongoose.connect(uri);
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log("Collections in medicare:");
    collections.forEach(c => console.log(` - ${c.name}`));
    await mongoose.disconnect();
  } catch (error) {
    console.error("Error:", error);
  }
}

checkCollections();
