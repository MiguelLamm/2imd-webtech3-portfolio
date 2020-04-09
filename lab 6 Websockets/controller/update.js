const update = require('../model/update');

let getAll = (req, res , next)=>{
    update.find({},( err, docs) => {
        if (!err){
            res.json({
                "status": "succes",
                "landen" : docs
                
            })
        } else {
            res.json({
                "status": "failed",
                "message": "kan gegevens niet opvragen"
            })
        }
    }

    )}

    let create =(req, res,next)=>{
        let land = new update();
        land.land= req.body.land;
        land.aantal = req.body.aantal;
        land.save((err,doc)=>{
        if(!err){
            res.json({
                "status": "succes",
                "data": {
                    "update": {
                        "text" : doc
                    }
                }
            });
        }
        if(err){
            res.json({
                "status": "failed",
                "update": "kan update niet saven"
            });
        }
    });
    
    }


let updates = (req, res)=> {
    let land = req.params.land;
    //let aantal = req.params.aantal;
    //let land = req.body.land;
    let aantal = req.body.aantal;
    //console.log(aantal);
    //console.log(land);

    if(land === undefined){
        res.json({
            "status": "error",
            "message": "land is undefined"
        })
    }else{
        if(land === "belgium"){
            update.findOneAndUpdate({},{"belgium": aantal}, (err,docs) => {
                console.log(docs);
                if(!err){
                res.json({
                    "status": "succes",
                    "land": "belgium",
                    "respons " : docs
                    
                })
            }
            })
        }
        if(land === "france"){
            update.findOneAndUpdate({},{"france": aantal}, (err,docs) => {
                if(!err){
                res.json({
                    "status": "succes",
                    "land": land,
                    "respons " : docs
                    
                })
            }
            })
        }
        if(land === "germany"){
            update.findOneAndUpdate({},{"germany": aantal}, (err,docs) => {
                if(!err){
                res.json({
                    "status": "succes",
                    "land": "germany",
                    "respons " : docs
                    
                })
            }
            })
        }
        if(land === "uk"){
            update.findOneAndUpdate({},{"uk": aantal}, (err,docs) => {
                console.log(docs);
                if(!err){
                res.json({
                    "status": "succes",
                    "land": "uk",
                    "respons " : docs
                    
                })
            }
            })
        }
    }

    
}

module.exports.getAll = getAll;
module.exports.updates = updates;
module.exports.create = create;