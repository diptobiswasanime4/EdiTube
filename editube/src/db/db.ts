import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    mongoose.connection.on("connected", () => {
      console.log(`Connected to MongoDB.`);
    });
  } catch (error) {
    console.log(`Error connecting to DB.`, error);
  }
}
