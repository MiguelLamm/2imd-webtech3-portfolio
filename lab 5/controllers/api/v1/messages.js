const Message = require('../../../models/message');


let getAll = (req, res)=>{
    let user = req.query.user;
    if(req.query.user ==null){
        res.json({
            "status": "succes",
            "data": {
                "messages": {
                    "text" : `getting ALL messages`
                }
            }
        });
    }else{
        Message.find({
            "user": `${user}`
        },(err,docs) =>{
            if(!err){
                res.json({
                    "status": "succes",
                    "data": {
                        "messages": {
                            "text" : docs
                        }
                    }
                });
            }
        })
        }
    /**/;

    
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

let create =(req, res,next)=>{
    let message = new Message();
    message.user= req.body.user;
    message.message = req.body.text;
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
    if(err){
        res.json({
            "status": "failed",
            "message": "kan message niet saven"
        });
    }
});

}

let put = (req, res)=>{
    let id = req.params.id;
    let user
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
module.exports.getAll=getAll;
module.exports.getMessageId = getMessageId;
module.exports.create=create;
module.exports.put=put;
module.exports.del=del;
