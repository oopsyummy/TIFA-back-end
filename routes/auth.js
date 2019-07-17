var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.send("GET request to the homepage");
  console.log("success");
});
/* POST */
router.post("/login", function(req, res) {
  console.log(req.body);
});

module.exports = router;
