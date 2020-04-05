const update = require('../model/update');

let getAll = (req, res , next)=>{
    update.find({},( err, data) => {
        if (!err){
            res.json({
                "status": "succes",
                "country" : data
                
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
            update.findOneAndUpdate({},{"belgium": aantal}, (err,data) => {
                console.log(data);
                if(!err){
                res.json({
                    "status": "succes",
                    "land": "belgium",
                    "respons " : data
                    
                })
            }
            })
        }
        if(land === "france"){
            update.findOneAndUpdate({},{"france": aantal}, (err,data) => {
                if(!err){
                res.json({
                    "status": "succes",
                    "land": landz,
                    "respons " : data
                    
                })
            }
            })
        }
        if(land === "germany"){
            update.findOneAndUpdate({},{"germany": aantal}, (err,data) => {
                if(!err){
                res.json({
                    "status": "succes",
                    "land": "germany",
                    "respons " : data
                    
                })
            }
            })
        }
        if(land === "uk"){
            update.findOneAndUpdate({},{"uk": aantal}, (err,data) => {
                console.log(data);
                if(!err){
                res.json({
                    "status": "succes",
                    "land": "uk",
                    "respons " : data
                    
                })
            }
            })
        }
    }

    
}

module.exports.getAll = getAll;
module.exports.updates = updates;