const express = require('express');
const router = express.Router();
const updateController = require('../../controller/update');

router.get("/", updateController.getAll);
router.put("/update", updateController.updates);

module.exports = router;
