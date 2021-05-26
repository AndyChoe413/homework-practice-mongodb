const mongoose = require('mongoose')
//data model
const recipeSchema = new mongoose.Schema({
    recipeName: {
        type: String,
    }
})

module.exports = mongoose.model('recipe', recipeSchema)