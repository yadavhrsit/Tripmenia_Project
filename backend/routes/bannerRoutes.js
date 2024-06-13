const express = require("express");
const multer = require("multer");
const bannerRouter = express.Router();
const Banner = require("../models/bannersModel");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/upload/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });
const uploadM = multer({ storage });
const uploadF = multer({ storage });

const updateTopBanner = async (req, res) => {
  try {
    const { path } = req.file;
    await Banner.findOneAndUpdate({ name: "topBanner" }, { imagePath: path });
    res.status(200).json({ message: "Top banner updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateMiddleBanner = async (req, res) => {
  try {
    const { path } = req.file;
    await Banner.findOneAndUpdate(
      { name: "middleBanner" },
      { imagePath: path }
    );
    res.status(200).json({ message: "Middle banner updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateFooterBanner = async (req, res) => {
  try {
    const { path } = req.file;
    await Banner.findOneAndUpdate(
      { name: "footerBanner" },
      { imagePath: path }
    );
    res.status(200).json({ message: "Footer banner updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getBanner = async (req, res) => {
  try {
    const banner = await Banner.find();
    res.status(200).json({ banner });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

bannerRouter.post("/update-top-banner", upload.single("file"), updateTopBanner);
bannerRouter.post(
  "/update-middle-banner",
  uploadM.single("file"),
  updateMiddleBanner
);
bannerRouter.post(
  "/update-footer-banner",
  uploadF.single("file"),
  updateFooterBanner
);
bannerRouter.get("/get-banner", getBanner);

module.exports = bannerRouter;
