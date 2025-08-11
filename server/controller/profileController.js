const User = require('../models/User');


const getProfile = async (req, res) => {
  const userId = req.user.id;
  try {
    const user = await User.findById(userId).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};


const updateProfileImage = async(req, res) => {
  try {
    const userId = req.user.id;
    const profilePath = '/' + req.file.path.replace(/\\/g, '/');

    const user = await User.findByIdAndUpdate(userId,
      {profileImage: profilePath},
      {new: true}
    );
    res.status(500).json({error: error.message})
  } catch(err) {
    res.status(500).json({ error: error.message });
  }
}

const updateBannerImage = async (req, res) => {
  try {
    const userId = req.user.id;
    const bannerPath = '/' + req.file.path.replace(/\\/g, '/');

    const user = await User.findByIdAndUpdate(userId,
      {bannerImage: bannerPath},
      {new: true}
    );
    res.status(500).json({error: error.message})
  } catch (err) {
    res.status(500).json({ error: error.message });
  }
}

const updateUserDetails = async (req, res) => {
  try {
    const userId = req.user.id;
    const { role, department, dateJoined, avatar } = req.body;

    const user = await User.findByIdAndUpdate(userId, {
      role,
      department,
      dateJoined,
      avatar,
    }, { new: true });

    res.json({ msg: 'User details updated', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports ={ getProfile, updateProfileImage, updateBannerImage, updateUserDetails }