import { ASC, MIN } from "../../components/Orden"
import { FETCH_RECIPES, FETCH_RECIPES_NAME, FILTER_RECIPES_DIET, FILTER_RECIPES_HEALTHSCORE, ORDER_RECIPES } from "../actions"

const initialState = {
    recipes: [],
    filteredRecipes: [],
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                filteredRecipes: action.payload
            }
        case FETCH_RECIPES_NAME: 
            return {
                ...state,
                filteredRecipes: action.payload
            }
        case ORDER_RECIPES: 
            let orderRecipesName = [...state.filteredRecipes]
            orderRecipesName = orderRecipesName.sort((a, b) => {
                if (a.name < b.name) {
                    return action.payload === ASC ? -1 : 1
                }
                if (a.name > b.name) {
                    return action.payload === ASC ? 1 : -1
                }
                return 0
            })
            return {
                ...state,
                filteredRecipes: orderRecipesName
            }
        case FILTER_RECIPES_HEALTHSCORE: 
            let orderRecipesHealthScore = [...state.filteredRecipes]
            orderRecipesHealthScore = orderRecipesHealthScore.sort((a, b) => {
                if (a.healthScore < b.healthScore) {
                    return action.payload === MIN ? -1 : 1
                }
                if (a.healthScore > b.healthScore) {
                    return action.payload === MIN ? 1 : -1
                }
                return 0
            })
            return {
                ...state,
                filteredRecipes: orderRecipesHealthScore
            }
        case FILTER_RECIPES_DIET: 
            let filterRecipes = state.recipes
            let dietRecipes = action.payload === "All" ? filterRecipes : filterRecipes.filter((diet) => diet.diets.some((diet) => diet === action.payload))
            console.log(dietRecipes, "avr")
            return {
                ...state, 
                filteredRecipes: dietRecipes
            }
        default: 
            return {
                ...state
            }
    }
}
