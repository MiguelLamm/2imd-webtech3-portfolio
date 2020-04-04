const update = require('../model/update');

let getAll = (req, res , next)=>{
    update.find({},( err, docs) => {
        if (!err){
            res.json({
                "status": "succes",
                "country" : docs
                
            })
        }
    }

    )}


let updates = (req, res, next)=> {
    res.json({
        "status": "succes",
        "updated": "belgie, frankrijk, etc"
    })
}

module.exports.getAll = getAll;
module.exports.updates = updates;