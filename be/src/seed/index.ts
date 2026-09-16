import "dotenv/config";
import { connectDB } from "../config/db.js";
import mongoose from "mongoose";
import { Product } from "../models/Product.js";
import { seedProducts } from "./data.js";

const seed = async () => {
  await connectDB();

  try {
    await Product.deleteMany({});
    console.log("Existing products deleted");

    await Product.insertMany(seedProducts);
    console.log("Products seeded successfully");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Error seeding products: ${message}`);
  }
};

seed()
  .catch((error) => {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Error seeding products: ${message}`);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.connection.close();
    console.log("Database connection closed");
  });
