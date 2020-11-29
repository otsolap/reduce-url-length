const mongoose = require('mongoose');
const shortId = require('shortid')

const reduceUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },
    reduced: {
        type: String,
        required: true,
        default: shortId.generate
    },
})

module.exports = mongoose.model('reduceUrl', reduceUrlSchema)