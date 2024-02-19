const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
  id: String,
  title: String,
  subtitle: String,
  guests: Number,
  bedrooms: Number,
  beds: Number,
  baths: Number,
  description: String,
  photos: [String],
  location: String,
  price: Number,
  category: String,
});

const PlaceModel = mongoose.model("Place", PlaceSchema);

module.exports = PlaceModel;
