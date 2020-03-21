const express = require('express');
const router = express.Router();
const messageController = require('../../../controllers/api/v1/messages');

router.get("/",messageController.getAll);

router.get("/messages",messageController.getMessage);

router.get("/messages/:id",messageController.getMessageId);

router.post("/messages/",messageController.create);

router.put("/messages/:id",messageController.put);

router.delete("/messages/:id", messageController.del);

//router.get("/messages?user=username",messageController.getMessageUser);
module.exports = router;