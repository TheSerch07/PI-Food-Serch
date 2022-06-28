import { FETCH_RECIPES } from "../actions"

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
        default: 
            return {
                ...state
            }
    }
}
