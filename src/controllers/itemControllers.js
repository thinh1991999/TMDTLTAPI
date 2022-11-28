const Item = require("../models/Item");
const { fileSizeFormatter } = require("../helpers/ultils");

const uploadItemInfo = async (req, res, next) => {
  try {
    const data = req.body;
    let filesArray = [];
    req.files.forEach((element) => {
      const file = {
        fileName: element.originalname,
        filePath: element.path,
        fileType: element.mimetype,
        fileSize: fileSizeFormatter(element.size),
      };
      filesArray.push(file);
    });
    const item = new Item({
      ...data,
      images: filesArray,
    });
    await item.save();
    return res.status(201).send("Upload thành công");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const getDetailItem = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (id) {
      Item.findOne(
        {
          _id: id,
        },
        (err, item) => {
          if (err) {
            return res.status(400).send({
              error: "Không tồn tại sản phẩm có id này",
            });
          }
          return res.status(200).send(item);
        }
      );
    } else {
      return res.status(201).send("thành công");
    }
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = { uploadItemInfo, getDetailItem };
