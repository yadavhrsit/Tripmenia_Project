const express = require("express");
const jwtHandler = require("../utils/jwtHandler");
const {
  AddPackage,
  GetAllPackages,
  getFilteredPackages,
  GetAllPackagesforAdmin,
  UpdatePackage,
  DeletePackage,
  ViewPackageById,
  getPackagesByCategoryId,
} = require("../controller/package.controller");
const uploadMiddleware = require("../utils/uploadMiddleware");

const packageRoutes = express.Router();
// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'upload/') // Specify the destination folder for uploaded files
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname + Date.now()) // Use the original file name as the saved file name
//     }
// });

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype.startsWith('image/')) {
//         cb(null, true); // Accept the file if it's an image
//     } else {
//         cb(new Error('Only images are allowed'), false); // Reject the file if it's not an image
//     }

// };

// const upload = multer({ storage: storage, fileFilter: fileFilter })// Accept up to 5 images

// Get all packages
packageRoutes.get("/view", GetAllPackages);

packageRoutes.get("/view/admin", GetAllPackagesforAdmin);

//Get all packages by category id
packageRoutes.get("/view/:id", getPackagesByCategoryId);
packageRoutes.get("/filter-view", getFilteredPackages);

// Create a new package
packageRoutes.post("/add", jwtHandler, uploadMiddleware, AddPackage);

// Update a package
packageRoutes.put("/:id", jwtHandler, UpdatePackage);

// View package by id
packageRoutes.get("/viewpackagedetail/:id", ViewPackageById);

// Delete a package
packageRoutes.delete("/:id", jwtHandler, DeletePackage);

module.exports = packageRoutes;
