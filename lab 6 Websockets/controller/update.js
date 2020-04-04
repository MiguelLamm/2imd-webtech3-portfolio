const getAll = (req,res, next) => {
    update.find({},(err,docs)=>{
        if(!err){
            res.json({
                "status": "succes",
                "landen": "belgie, frankrijk, etc"
            })
        }else {
            res.json({
                "status": "error",
                "message" :"kan docs niet vinden"
            })
        }
    })
}