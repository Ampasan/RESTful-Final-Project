import mongoose from "mongoose";

const setSchema = new mongoose.Schema({
  set_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  release_date: {
    type: Date,
    required: true,
  },
  number_of_cards: {
    type: Number,
    required: true,
  },
  rarity_distribution: {
    type: Object,
    required: true,
  },
  price_range: {
    type: String,
    required: true,
  },
});

export default mongoose.model("set", setSchema);
