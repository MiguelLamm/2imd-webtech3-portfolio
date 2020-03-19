const express = require('express');
const router = express.Router();

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