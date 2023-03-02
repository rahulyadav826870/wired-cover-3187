const express = require("express");
const { UserModel } = require("../Model/User.model");

const userRoute = express.Router();

userRoute.post("/add", async (req, res) => {

  try {
    const user = new UserModel(req.body);
    await user.save();

    res.send({ msg: "User Added Sucessfully" });
  } catch (error) {
    res.send({ msg: "Something Wrong", error: error.message });
  }
});

module.exports = {
  userRoute,
};
