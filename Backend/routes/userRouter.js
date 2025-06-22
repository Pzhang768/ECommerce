const express = require('express');
const userRouter = express.Router();

userRouter.get('/', function (req, res) {
  res.send({data: "asds"});
})

userRouter.get("/profile", (req, res) => {
  res.send("User profile");
});



module.exports = userRouter;