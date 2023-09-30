import mongoose from "mongoose";

const connectToDbAsync = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    const db = mongoose.connection;

    db.on("open", () => console.log("MongoDB connected..."));
  } catch (error) {
    console.log("Error connecting to mongoDB...");
  }
};

export default connectToDbAsync;
