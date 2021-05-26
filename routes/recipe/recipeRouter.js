
const express = require('express')
const router = express.Router()

const recipeController = require('./controller/recipeController')

router.get('/', (req, res, next) => {
    res.json({ index: 'index path' })
})

router.get('/get-all-recipes', (req, res) => {
    //runs callback function from recipeController.js when called
    recipeController.getAllRecipes((err, payload) => {
        if (err) {
            res.status(500).json({message:'Error', error:err})
        } else {
            res.json({message:'success', data:payload})
        }
    })
})

router.post('/create-recipe', (req, res) => {
    recipeController.createRecipe(req.body, (err, payload) => {
        if (err) {
            res.status(500).json({message:'Error', error: err})
        } else {
            res.json({message: 'success', data:payload})
        }
    })
})

module.exports = router