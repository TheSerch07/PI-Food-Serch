import axios from "axios";

export const FETCH_RECIPES = "@recipes/fetch_recipes";

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