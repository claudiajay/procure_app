const multer = require("multer");
const path = require("path");

const profileStorage = multer.diskStorage({
  destination: "uploads/avatar/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-profile" + path.extname(file.originalname));
  },
});

const bannerStorage = multer.diskStorage({
  destination: "uploads/banner/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-banner" + path.extname(file.originalname));
  },
});

const uploadProfile = multer({ storage: profileStorage });
const uploadBanner = multer({ storage: bannerStorage });

module.exports = {
  uploadProfile,
  uploadBanner,
};
