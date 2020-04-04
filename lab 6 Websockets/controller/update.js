const update = require('../model/update');

let getAll = (req, res , next)=>{
    update.find({},( err, docs) => {
        if (!err){
            res.json({
                "status": "succes",
                "country" : docs
                
            })
        } else {
            res.json({
                "status": "failed",
                "message": "gigantische fout"
            })
        }
    }

    )}


let updates = (req, res, next)=> {
    //let land = req.params.land;
    //let aantal = req.params.aantal;
    let land = req.body.land;
    let aantal = req.body.aantal;
    console.log(aantal);
    console.log(land);
    res.json({
        "land": land,
        "aantal" : aantal
        
    })
}

module.exports.getAll = getAll;
module.exports.updates = updates;