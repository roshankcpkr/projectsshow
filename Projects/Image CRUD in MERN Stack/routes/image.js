const router = require("express").Router();
const cloudinary = require("../config/cloudinary");
const upload = require("../config/multer");
const Image = require("../models/image");

router.post("/", upload.single("image"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Create new Image
    let image = new Image({
      name: req.body.name,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
    });
    // Save Image
    await image.save();
    res.json(image);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    let image = await Image.find();
    res.json(image);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    // Find Image by id
    let image = await Image.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(image.cloudinary_id);
    // Delete Image from db
    await image.remove();
    res.json(image);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    let image = await Image.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(image.cloudinary_id);
    // Upload image to cloudinary
    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path);
    }
    const data = {
      name: req.body.name || image.name,
      avatar: result?.secure_url || image.avatar,
      cloudinary_id: result?.public_id || image.cloudinary_id,
    };
    image = await Image.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(image);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // Find Image by id
    let image = await Image.findById(req.params.id);
    res.json(image);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
