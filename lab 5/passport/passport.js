const passport = require('passport');
const User = require('./models/user');

// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(User.createStrategy());


//serializeee
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());