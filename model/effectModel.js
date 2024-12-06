import mongoose from "mongoose";

const effectSchema = new mongoose.Schema({
  effect_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  related_cards: {
    type: String,
    required: true,
  },
  activation_condition: {
    type: String,
    required: true,
  },
});

export default mongoose.model("effect", effectSchema);
