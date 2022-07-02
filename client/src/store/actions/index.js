import axios from "axios";

export const FETCH_RECIPES = "@recipes/fetch_recipes";
export const FETCH_RECIPES_NAME = "@recipes/fetch_recipes_name";
export const FETCH_DIETS = "@diets/fetch_diets";
export const ORDER_RECIPES = "@recipes/order_alp";
export const FILTER_RECIPES_HEALTHSCORE = "@recipes/filter_healthScore";
export const FILTER_RECIPES_DIET = "@recipes/filter_diet";
export const POST_RECIPE = "@recipes/post_recipe";

export function fetchRecipes() {
    return function(dispatch) {
        axios.get("http://localhost:3001/recipes")
        .then((recipe) => {
            dispatch({
                type: FETCH_RECIPES,
                payload: recipe.data
            });
        })
        .catch((err) => console.log(err))
    };
};

export function fetchRecipesName(name) {
    return function(dispatch) {
        axios.get("http://localhost:3001/recipes/?name=" + name)
        .then((recipe) => {
            dispatch({
                type: FETCH_RECIPES_NAME,
                payload: recipe.data
            });
        })
        .catch((err) => console.log(err))
    };
};

export function fetchDiets() {
    return function(dispatch) {
        axios.get("http://localhost:3001/diet")
        .then((diet) => {
            dispatch({
                type: FETCH_DIETS,
                payload: diet.data
            })
        })
    }
}

export function postRecipe(recipe) {
    return function() {
        axios.post("http://localhost:3001/recipes", recipe)
        .then(() => {
        })
        .catch((err) => console.log(err))
    };
};

export function orderRecipes(ord) {
    return {
        type: ORDER_RECIPES,
        payload: ord
    };
};

export function filterRecipesHealthScore(ord) {
    return {
        type: FILTER_RECIPES_HEALTHSCORE,
        payload: ord
    };
};

export function filterRecipesDiet(ord) {
    return {
        type: FILTER_RECIPES_DIET,
        payload: ord
    }
}