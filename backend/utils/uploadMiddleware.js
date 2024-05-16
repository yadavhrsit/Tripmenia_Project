const multer = require("multer");
const fs = require("fs");
const path = require("path");
const uploadFilePath = path.resolve(__dirname, "./..", "public/upload");

// Configure multer storage and file name
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFilePath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Create multer upload instance
const upload = multer({ storage });

// Validate file types and sizes
const validateFiles = (files) => {
  const errors = [];
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "image/svg",
    "image/webp",
  ];
  const maxSize = 0.5 * 1024 * 1024; // 0.5MB

  files.forEach((file) => {
    if (!allowedTypes.includes(file.mimetype)) {
      errors.push(`Invalid file type: ${file.originalname}`);
    }

    if (file.size > maxSize) {
      errors.push(`File too large: ${file.originalname}`);
    }
  });

  return errors;
};

// Remove uploaded files
const removeFiles = (files) => {
  files.forEach((file) => {
    fs.unlinkSync(file.path);
  });
};

// Custom file upload middleware
const uploadMiddleware = (req, res, next) => {
  upload.array("images", 3)(req, res, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: err.message });
    }

    const files = req.files;
    const errors = validateFiles(files);

    if (errors.length > 0) {
      removeFiles(files);
      return res.status(400).json({ errors });
    }

    req.files = files;
    next();
  });
};

module.exports = uploadMiddleware;
