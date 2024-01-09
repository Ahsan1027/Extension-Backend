import mongoose from "mongoose";

const addDataSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  imgSrc: {
    type: String
  }
},
  {
    timestamps: true
  }
);

const ScrapeFriends = new mongoose.model("scrape-friends", addDataSchema)
module.exports = ScrapeFriends