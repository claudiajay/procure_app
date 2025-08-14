const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const registerUser = async (req, res) => {
  console.log("registerUser hit");
  const { name, email, password, role } = req.body;
  try {
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ msg: "Email already in use" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    res.status(201).json({ msg: "User created successfully!" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};



const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    const aMatch = await bcrypt.compare(password, user.password);
    if (!aMatch) return res.status(400).json({ msg: "Invalid Credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.ACCESS_SECRET_TOKEN,
      { expiresIn: "2d" }
    );
    res.json({
      token,
      msg: "User login successful!"
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = { registerUser, loginUser };
