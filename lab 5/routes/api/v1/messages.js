const express = require('express');
const router = express.Router();
const messageController = require('../../../controllers/api/v1/messages');

router.get("/",messageController.getAll);

router.get("/:id",messageController.getMessageId);

router.post("/",messageController.create);

router.put("/:id",messageController.put);

router.delete("/:id", messageController.del);


module.exports = router;