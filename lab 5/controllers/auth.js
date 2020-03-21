const User = require('../models/userDetails');
const jwt = require('jsonwebtoken');

const signup = async (req, res, next) => {
    console.log(req.body);

    let username = req.body.username; // UI of postman
    let password = req.body.password;

    const user = new User({
        username: username
    });
    await user.setPassword(password);
    await user.save().then(result => {
        let token = jwt.sign({
            uid:result._id,
            username: result.username
        }, "mysecret");

        res.json({
            "status": "success",
            "data":{
                "token": token
            }
        })
    }).catch(error => {
        res.json({
            "status": "error"
        })
    });
};

const login = async(req,res,next) =>{
    const { user } = await User.authenticate()(req.body.username, req.body.password).then(result =>{

        if(!result.user){
            res.json({
                "status" : "failed",
                "message": "login failed"
            })
        }

        let token = jwt.sign({
            uid:result._id,
            username: result.user.username
        }, "mysecret");

        return res.json({
            "status": "success",
            "data":{
                "token": token
            }
        })
    }).catch(error => {
        res.json({
            "status": "error",
            "message": error
        })
    });
};

module.exports.signup = signup;
module.exports.login = login;