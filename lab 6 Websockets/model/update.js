const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const updateSchema = new Schema({
    belgium : Number,
    germany : Number,
    france : Number,
    uk : Number
})
const update = mongoose.model('update',updateSchema);
module.exports = update;