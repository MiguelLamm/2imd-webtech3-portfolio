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

let getMessage = (req, res)=>{
    res.json({
        "status": "succes",
        "data": {
            "messages": {
                "text" : "get message succes"
            }
        }
    });
}

let getMessageId = (req, res)=>{
    let id = req.params.id;
    res.json({
        "status": "succes",
        "data": {
            "messages": {
                "text" : `get message met id: ${id} succes `
            }
        }
    });
}

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
}

let put = (req, res)=>{
    let id = req.params.id;
    res.json({
        "status": "succes",
        "data": {
            "messages": {
                "text" : `put message met id: ${id} succes `
            }
        }
    });
}

let del = (req, res)=>{
    let id = req.params.id; 
    res.json({
        "status": "succes",
        "data": {
            "messages": {
                "text" : `del message met id: ${id} succes `
            }
        }
    });
}

let getMessageUser = (req, res)=>{
    let user = req.params.user; 
    res.json({
        "status": "succes",
        "data": {
            "messages": {
                "text" : `del message met user: ${user} succes `
            }
        }
    });
}

module.exports.getAll=getAll;
module.exports.getMessage = getMessage;
module.exports.getMessageId = getMessageId;
module.exports.create=create;
module.exports.put=put;
module.exports.del=del;
module.exports.getMessageUser=getMessageUser;