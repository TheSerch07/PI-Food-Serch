const { Recipe, Diet } = require("../db")
const { API_KEY } = process.env;
const axios = require("axios")

async function getRecipesApi() {
    const info = await axios("https://api.spoonacular.com/recipes/complexSearch?apiKey=6c5e909c232c4a05b04dd0bc1bc6b1a9")
    console.log(info.data)
    return info
}

// getRecipesApi()
console.log(getRecipesApi())
console.log(API_KEY, "api ke")