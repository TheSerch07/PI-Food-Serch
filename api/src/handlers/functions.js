const { Recipe, Diet } = require("../db")
const { API_KEY } = process.env;
const axios = require("axios")
const { Op } = require("sequelize")

function recipeInfo(data) {
    return {
        id: data.id,
        name: data.title,
        image: data.image,
        resume: data.summary,
        steps: data.analyzedInstructions[0]?.steps.map((e) => {
            return {
                number: e.number,
                step: e.step
            }
        }),
        healthScore: data.healthScore
    }
}

async function getRecipesApi() {
    // const info = await axios(`https://api.spoonacular.com/recipes/complexSearch?${API_KEY}`)
    // https://api.spoonacular.com/recipes/complexSearch?query=pasta&addRecipeInformation=true&number=100&apiKey=6c5e909c232c4a05b04dd0bc1bc6b1a9
    // &number=100
    let arrayRecipes = []
    const info = await axios("https://api.spoonacular.com/recipes/complexSearch?apiKey=6c5e909c232c4a05b04dd0bc1bc6b1a9&addRecipeInformation=true")
    // console.log(info.data.results)
    info.data.results.forEach(recipe => {
        arrayRecipes.push(recipeInfo(recipe))
    });
    console.log(arrayRecipes, "el array de serch")
    return arrayRecipes
}

async function getRecipesApiName(name) {
    let arrayRecipes = []
    const infoForName = await axios("https://api.spoonacular.com/recipes/complexSearch?query=" + name + "&addRecipeInformation=true&number=10&apiKey=6c5e909c232c4a05b04dd0bc1bc6b1a9")
    // console.log(infoForName.data.results)
    infoForName.data.results.forEach(recipe => {
        arrayRecipes.push(recipeInfo(recipe))
    });
    console.log(arrayRecipes, "jeje")
    return arrayRecipes
}

async function getRecipesApiId(id) {
    const infoForId = await axios("https://api.spoonacular.com/recipes/" + id + "/information?apiKey=6c5e909c232c4a05b04dd0bc1bc6b1a9")
    console.log(recipeInfo(infoForId.data), "jee")
    return recipeInfo(infoForId.data)
}

async function getRecipesDb() {
    const recipeFromDb = await Recipe.findAll()
    return recipeFromDb
}

async function getRecipesDbName(name) {
    const recipeDbName = await Recipe.findAll({
        include: Diet,
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        }
    })
    return recipeDbName
}

async function getRecipesDbId(id) {
    const recipeByPk = await Recipe.findByPk(id, {
        include: {
            model: Diet
        }
    })
    return recipeByPk
}

// getRecipesApi()
// console.log(getRecipesApi())
// console.log(getRecipesApiName("pasta"))
console.log(API_KEY, "api ke")
console.log(getRecipesApiId(4555))
// console.log(process.env, "el procees")