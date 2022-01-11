const express = require('express');
router = express.Router();
route = require("../controllers/controllers");

router.get("/", route.controllers)

module.exports = router;