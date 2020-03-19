const express = require('express');
const router = express.Router();
const messageController = require('../../../controllers/api/v1/messages');

router.get("/",(req, res)=>{
    res.json({
        "status": "succes",
        "data": {
            "messages": {
                "text" : []
            }
        }
    });
});

router.post("/",(req, res)=>{
    res.json({
        "status": "succes",
        "data": {
            "message": {
                "text" : "messages POST"
            }
        }
    });
});

module.exports = router;