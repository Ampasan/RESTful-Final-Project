import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  card_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  attribute: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  attack: {
    type: Number,
    required: true,
  },
  defense: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("card", cardSchema);
