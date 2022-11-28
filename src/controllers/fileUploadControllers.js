const Image = require("../models/Image");

const singleFileUpload = async (req, res, next) => {
  console.log(123);
  return res.status(201).send("Upload thành công");
  // try {
  //   const file = new Image({
  //     fileName: req.file.originalname,
  //     filePath: req.file.path,
  //     fileType: req.file.mimetype,
  //     fileSize: fileSizeFormatter(req.file.size),
  //   });
  //   await file.save();
  //   return res.status(201).send("Upload thành công");
  // } catch (error) {
  //   return res.status(400).error(error.message);
  // }
};

module.exports = { singleFileUpload };
