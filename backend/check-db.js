import mongoose from "mongoose";
import 'dotenv/config';
import Doctor from "./models/Doctor.js";

async function checkDB() {
  await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/medicare");
  const count = await Doctor.countDocuments();
  console.log(`Doctors count: ${count}`);
  await mongoose.disconnect();
}

checkDB();
