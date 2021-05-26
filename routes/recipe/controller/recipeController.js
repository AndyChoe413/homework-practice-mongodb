//access to data model brought in from Recipe.js
const Recipe = require('../model/Recipe')

module.exports = {
    //objects exporting data depending on the call made from the recipeRouter.js
    getAllRecipes: (callback) => {
        //pulls in data schema model from Recipe.js folder
        Recipe.find({}, (err, payload) => {
            if (err) {
            callback(err, null)
        } else {
            callback(null,payload)
        }
        })
    },

    //object used to create a new object with recipe
    createRecipe: (body, callback) => {
        let createdRecipe = new Recipe({
            recipeName: body.recipeName
        })

        //created recipe saved to mongodb
        createdRecipe.save((err, payload) => {
        if (err) {
            callback(err,null)
        } else {
            callback(null,payload)
        }
    })
    },

}