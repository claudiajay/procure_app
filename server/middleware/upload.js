const multer = require('multer');
const path = require("path");

const profileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/profile');
  },
  filename: (req, file, cb) => {
    cb(null, 'profile_' + Date.now() + path.extname(file.originalname));
  }
});

const bannerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/banner');
  },
  filename: (req, file, cb) => {
    cb(null, 'banner_' + Date.now() + path.extname(file.originalname));
  },
});

const uploadProfile = multer({ storage: profileStorage });
const uploadBanner = multer({ storage: bannerStorage });

module.exports = { uploadProfile, uploadBanner };
