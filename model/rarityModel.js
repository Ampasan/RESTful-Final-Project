import mongoose from "mongoose";

const raritySchema = new mongoose.Schema({
  rarity_id: {
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
  effect_on_price: {
    type: String,
    required: true,
  },
  percentage_in_set: {
    type: Number,
    required: true,
  },
  visual_effect: {
    type: String,
    required: true,
  },
});

export default mongoose.model("raritiy", raritySchema);
