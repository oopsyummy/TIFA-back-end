var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.send("GET request to the auth");
  console.log("success");
});
/* POST */
router.get("/login", function(req, res) {
  res.json([
    { username: "test", password: "test001" },
    { username: "test", password: "test002" }
  ]);
  console.log("success-login");
});

router.post("/login", function(req, res) {
  console.log("success-post");
  console.log(req.body);
});

module.exports = router;
