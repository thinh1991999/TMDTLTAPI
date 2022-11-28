const mongoose = require("mongoose");
const {
  Schema: {
    Types: { ObjectId },
  },
} = mongoose;
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const itemSchema = mongoose.Schema(
  {
    images: [Object],
    userid: {
      type: ObjectId,
      ref: "users",
      required: true,
    },
    // shopid: {
    //   type: ObjectId,
    //   ref: "users",
    //   required: true,
    // },
    name: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    liked_count: {
      type: Number,
      default: 0,
    },
    cmt_count: {
      type: Number,
      default: 0,
    },
    price_max_before_discount: {
      type: Number,
      default: 1000000000,
    },
    has_lowest_price_guarantee: {
      type: Boolean,
      default: false,
    },
    price_before_discount: {
      type: Number,
      default: 1000000000,
    },
    price_min_before_discount: {
      type: Number,
      default: 1000000000,
    },
    exclusive_price_info: {
      type: Number,
      default: 1000000000,
    },
    hidden_price_display: {
      type: Number,
      default: 1000000000,
    },
    price_min: {
      type: Number,
      default: 1000000000,
    },
    price_max: {
      type: Number,
      default: 1000000000,
    },
    price: {
      type: Number,
      default: 1000000000,
    },
    stock: {
      type: Number,
      default: 1000000000,
    },
    discount: {
      type: String,
      default: "40%",
    },
    historical_sold: {
      type: Number,
      default: 1000000000,
    },
    sold: {
      type: Number,
      default: 1000000000,
    },
    show_discount: {
      type: Number,
      default: 1000000000,
    },
    raw_discount: {
      type: Number,
      default: 1000000000,
    },
    min_purchase_limit: {
      type: Number,
      default: 1000000000,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  {
    collection: "items",
    timestamps: true,
  }
);

// userSchema.pre("save", async function (next) {
//   // Hash the password before saving the user model
//   const user = this;
//   if (user.isModified("password")) {
//     user.password = await bcrypt.hash(user.password, 8);
//   }
//   next();
// });

// userSchema.methods.generateAuthToken = async function () {
//   // Generate an auth token for the user
//   const user = this;
//   const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY);
//   user.tokens = user.tokens.concat({ token });
//   await user.save();
//   return token;
// };

// userSchema.statics.findByCredentials = async (email, password) => {
//   // Search for a user by email and password.
//   const user = await User.findOne({ email });
//   if (!user) {
//     throw new Error({ error: "Invalid login credentials" });
//   }
//   const isPasswordMatch = await bcrypt.compare(password, user.password);
//   if (!isPasswordMatch) {
//     throw new Error({ error: "Invalid login credentials" });
//   }
//   return user;
// };

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
