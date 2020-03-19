const getAll = (req, res)=>{
    res.json({
        "status": "succes",
        "data": {
            "messages": {
                "text" : []
            }
        }
    });
}

const create =(req, res)=>{
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
module.exports.create=create;