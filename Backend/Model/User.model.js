const mongoose = require("mongoose");

const userStructure = mongoose.Schema({
  name: String,
});

const UserModel = mongoose.model("user_details", userStructure);

module.exports = {
  UserModel,
};
