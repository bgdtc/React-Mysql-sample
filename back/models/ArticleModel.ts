const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ArticleSchema = new Schema({
    title: {
        type: String,
        default: 'titre non fourni'
    },
    description: {
        type: String,
        default: 'putain la description'
    }
})



module.exports = mongoose.model('Article', ArticleSchema)