const Shop = require("../models/Shop");
const User = require("../models/User");

const createShop = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const shopId = req.user.shopId;
    if (shopId) {
      return res.status(400).send("Người dùng này đã là người bán hàng");
    }
    const { shopName, address } = req.body;
    const newShop = new Shop({ userId, shopName, address });
    await newShop.save((err, shop) => {
      if (err) {
        return res.status(400).send("Có lỗi xảy ra, vui lòng thử lại");
      } else {
        User.findOneAndUpdate(
          {
            _id: userId,
          },
          { shopId: shop._id },
          (err, success) => {
            if (err) {
              return res.status(400).send("Có lỗi xảy ra, vui lòng thử lại");
            }
            return res.status(200).send("Trở thành người bán hàng thành công");
          }
        );
      }
    });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = { createShop };
