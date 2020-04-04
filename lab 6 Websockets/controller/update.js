const update = require('../model/update');

let getAll = (req, res)=>{
    
        res.json({
            "status": "succes",
            "data": {
                "messages": {
                    "text" : `getting ALL data`
                }
            }
        });
    }

let updates = (req, res, next)=> {
    res.json({
        "status": "succes",
        "updated": "belgie, frankrijk, etc"
    })
}

module.exports.getAll = getAll;
module.exports.updates = updates;