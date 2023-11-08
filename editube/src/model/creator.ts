import mongoose from "mongoose";

const CreatorSchema = new mongoose.Schema({
  name: String,
  email: String,
  ytChannel: String,
});

const Creator =
  mongoose.models.creators || mongoose.model("creators", CreatorSchema);

export default Creator;
