const express = require("express");
const { connection } = require("./Config/db");
const { userRoute } = require("./Routes/User.route");
require("dotenv").config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.send("This is Home Page");
  } catch (error) {
    res.send({ msg: "Something Wrong", Error: error.message });
  }
});

app.use("/user", userRoute);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connect to DB");
    console.log(`server is running ${process.env.port}`);
  } catch (error) {}
});
