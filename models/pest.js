const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const pestsSchema = new Schema(
  {
    name: String,
    scientificName: String,
    symptoms: [{ type: String }],
    charecteristics: String,
    pesticidesIds: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Pesticides",
      },
    ],
    cropsIds: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Crop",
      },
    ],
    inventory: { type: Number, default: 0 },
    type: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pests", pestsSchema);
