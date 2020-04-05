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
                "message": "kan gegevens niet opvragen"
            })
        }
    }

    )}


let updates = (req, res)=> {
    let land = req.params.land;
    //let aantal = req.params.aantal;
    //let land = req.body.land;
    let aantal = req.body.aantal;
    console.log(aantal);
    console.log(land);

    if(land === undefined){
        res.json({
            "status": "error",
            "message": "land is undefined"
        })
    }else{
        if(land === "belgium"){
            update.findOneAndUpdate({},{"belgium": aantal}, (err,docs) => {
                if(!err){
                res.json({
                    "status": "succes",
                    "land " : docs
                    
                })
            }
            })
        }
    }

    
}

module.exports.getAll = getAll;
module.exports.updates = updates;