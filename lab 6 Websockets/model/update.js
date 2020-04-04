const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const updateSchema = new Schema({
    Belgium: Number,
    France : Number,
    Germany: Number
})
const update = mongoose.model('update',updateSchema);
module.exports = update;