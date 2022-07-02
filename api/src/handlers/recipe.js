const { getRecipesApi, getRecipesApiName, getRecipesApiId, getRecipesDb, getRecipesDbName, getRecipesDbId, getDiet, getDietDb, postRecipeDb } = require("./functions");

const getRecipes = async (req, res, next) => {
    try {
        const { name } = req.query;
        let recipeDb;
        let recipeApi;
        if (name) {
            recipeDb = await getRecipesDbName(name)
            recipeApi = await getRecipesApiName(name)
            console.log(recipeApi.dataValues.diets, "what?")
            return res.status(200).json([...recipeDb, ...recipeApi])
        } else {
            recipeDb = await getRecipesDb()
            recipeApi = await getRecipesApi()
            console.log(recipeDb.dataValues.diets, "que putas?")
            return res.status(200).json([...recipeDb, ...recipeApi])
        }
    } catch (err) {
        next(err)
    }
}

const getRecipesId = async (req, res, next) => {
    try {
        const { id } = req.params;
        let recipeDb;
        let recipeApi;
        if (id.length > 10) {
            recipeDb = await getRecipesDbId(id)
            return res.status(200).json(recipeDb)
        }
        recipeApi = await getRecipesApiId(id)
        return res.status(200).json(recipeApi)
    } catch (err) {
        next(err)
    }
}

const postRecipes = async (req, res, next) => {
    try {
        const values = req.body;
        console.log(values)
        const createRecipe = await postRecipeDb(values)
        console.log(createRecipe, "xdd")
        createRecipe.dataValues ? res.send({msg: "Recipe created!"}) : res.status(400).send({msg: "Enter the data correctly!"})
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getRecipes,
    getRecipesId,
    postRecipes
}