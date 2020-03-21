const User = require('../models/user');
const passport = require('../passport/passport');

const signup = (req,res,next)=> {

    let username = req.body.username;
    let password = req.body.password;

    const user = new DefaultUser({username: username});
    await user.setPassword(password);
    await user.save().then(result =>{
        res.json({
            "status": "succes"
        })
    }).catch(error =>{
        res.json({
            "status":"error"
        })
    });
//const { user } = await DefaultUser.authenticate()('user', 'password');
};
module.exports.signup = signup;