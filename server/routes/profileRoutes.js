const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { uploadProfile, uploadBanner } = require('../middleware/upload')


const { updateProfileImage, updateBannerImage, updateUserDetails, getProfile } = require("../controller/profileController");



router.post("/upload/profile", auth, uploadProfile.single('profile'), updateProfileImage);
router.post("/upload/banner", auth, uploadBanner.single('banner'), updateBannerImage);
router.patch("/edit", auth, updateUserDetails);
router.get("/", auth, getProfile);


module.exports = router;