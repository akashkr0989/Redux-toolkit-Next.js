import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MONGO database");
  } catch (err) {
    console.log("Error to connect to MONGO database", err);
  }
}
