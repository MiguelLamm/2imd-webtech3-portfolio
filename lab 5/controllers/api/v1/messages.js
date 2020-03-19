var mongoose = require('mongoose');
  var Schema = mongoose.Schema;


let getAll = (req, res)=>{
    res.json({
        "status": "succes",
        "data": {
            "messages": {
                "text" : []
            }
        }
    });
}

let getMessage = (req, res)=>{
    res.json({
        "status": "succes",
        "data": {
            "messages": {
                "text" : []
            }
        }
    });
}

let create =(req, res)=>{
    let user = req.body.user;
    let text = req.body.text;
    res.json({
        "status": "succes",
        "data": {
            "message": {
                "text" : "messages POST"
            }
        }
    });
}

module.exports.getAll=getAll;
module.exports.getMessage = getMessage;
module.exports.create=create;