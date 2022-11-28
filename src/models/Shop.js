const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const shopSchema = mongoose.Schema(
  {
    userId: {
      type: ObjectId,
      ref: "users",
      required: true,
    },
    items: {
      type: Object,
      required: false,
      default: [],
    },
    shopName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { collection: "shops", timestamps: true }
);

const Shop = mongoose.model("Shop", shopSchema);

module.exports = Shop;
