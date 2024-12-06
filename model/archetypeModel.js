import mongoose from "mongoose";

const archetypeSchema = new mongoose.Schema({
  archetype_id: {
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
  number_of_cards: {
    type: Number,
    required: true,
  },
  origin_year: {
    type: Number,
    required: true,
  },
  popularity: {
    type: String,
    required: true,
  },
});

export default mongoose.model("archetype", archetypeSchema);
