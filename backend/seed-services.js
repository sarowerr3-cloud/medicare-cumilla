import mongoose from "mongoose";
import 'dotenv/config';
import Service from "./models/Service.js";

async function seedServices() {
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM_DEPLOYED";
  try {
    await mongoose.connect(uri);
    
    const count = await Service.countDocuments();
    if (count > 0) {
      console.log("Services already exist. Skipping seed.");
      await mongoose.disconnect();
      return;
    }

    const initialServices = [
      { name: "Blood Pressure Check", price: 50, about: "General blood pressure monitoring.", available: true },
      { name: "Blood Sugar Test", price: 30, about: "Fast and accurate glucose testing.", available: true },
      { name: "Full Blood Count", price: 120, about: "Comprehensive hematology analysis.", available: true },
      { name: "X-Ray Scan", price: 250, about: "High-resolution digital imaging.", available: true },
      { name: "COVID-19 PCR", price: 80, about: "Certified viral testing with fast results.", available: true }
    ];

    await Service.insertMany(initialServices);
    console.log("Seeded 5 services successfully!");
    
    await mongoose.disconnect();
  } catch (error) {
    console.error("Error seeding services:", error);
  }
}

seedServices();
