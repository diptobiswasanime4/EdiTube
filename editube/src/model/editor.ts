import mongoose from "mongoose";

const EditorSchema = new mongoose.Schema({
  name: String,
  email: String,
  ytChannel: String,
});

const Editor =
  mongoose.models.editors || mongoose.model("editors", EditorSchema);

export default Editor;
