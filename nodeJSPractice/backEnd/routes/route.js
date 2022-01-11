const express = require('express');
router = express.Router();
route = require("../controllers/controllers")

router.get("/", route.controller)

module.exports = router;