const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const updateSchema = new Schema({
    message : String,
    user: String
})
const update = mongoose.model('update',updateSchema);
module.exports = update;