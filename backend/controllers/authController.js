// controllers/authController.js
const User = require('../models/userModel');

const adminLogin = async (req, res) => {
  try {
    console.log(req.body)
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    console.log(user)
    if (user) {
      res.status(200).send({
        data: user,
        success: true,
        message: "Login successfully",
      });
    } else {
      res.status(200).send({
        data: user,
        success: false,
        message: "Invalid username or password",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  adminLogin,
};
