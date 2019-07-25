var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.send("GET request to the auth");
  console.log("success111");
});
/* POST */
router.get("/login", function(req, res) {
  res.send("GET request to the login");
});
router.post("/login", function(req, res) {
  if (req.body.username === "Test" && req.body.password === "Test") {
    res.status(200, console.log(req.body)).end();
  } else {
    res.status(403, console.log(req.body)).end();
  }
});

module.exports = router;
