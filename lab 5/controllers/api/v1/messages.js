const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
const messageSchema = new Schema({
    message : String,
    user: String,
})
const Message = mongoose.model('message', messageSchema);

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

/*let getMessage = (req, res)=>{
    res.json({
        "status": "succes",
        "data": {
            "messages": {
                "text" : []
            }
        }
    });
}*/

let create =(req, res)=>{
    let message = new Message();
    message.user= "mijn username";
    message.message = "mijn bericht";
    message.save((err,doc)=>{
    if(!err){
        res.json({
            "status": "succes",
            "data": {
                "message": {
                    "text" : doc
                }
            }
        });
    }
});
    //let user = req.body.user;
    //let message = req.body.message;
    
}

module.exports.getAll=getAll;
//module.exports.getMessage = getMessage;
module.exports.create=create;