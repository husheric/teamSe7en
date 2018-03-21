var express = require('express');
var router = express.Router();
let db = require("../db/queries");
const passport = require("../auth/local");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/new", db.createUser);

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json(req.user);
});

router.get("/logout", db.logoutUser);

router.get("/user/:id", db.getUserById);

module.exports = router;
