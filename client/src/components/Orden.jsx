import { useDispatch } from "react-redux";
import { fetchRecipes, orderRecipes, filterRecipesHealthScore, filterRecipesDiet } from "../store/actions"; 

export const ASC = "A-Z";
export const DES = "Z-A";
export const MIN = "Min";
export const MAX = "Max";
 
export default function Order() {
    const dispatch = useDispatch();

    function reloadRecipes() {
        dispatch(fetchRecipes())
    };

    function onSelectAlpChange(e) {
        dispatch(orderRecipes(e.target.value))
    };

    function onSelectHealthScore(e) {
        dispatch(filterRecipesHealthScore(e.target.value))
    };

    function onSelectDiet(e) {
        dispatch(filterRecipesDiet(e.target.value))
    }
    
    return (
    <div>
        <button onClick={reloadRecipes}>Reload Recipes</button>
        <select name="orderAlp" onChange={onSelectAlpChange}>
            <option value={ASC}>A-Z</option>
            <option value={DES}>Z-A</option>
        </select>
        <select name="orderHealthScore" onChange={onSelectHealthScore}>
            <option value={MIN}>Min</option>
            <option value={MAX}>Max</option>
        </select>
        <select name="filterDiet" onChange={onSelectDiet}>
            <option value="All">All</option>
            <option value="gluten free">Gluten free</option>
            <option value="ketogenic">Ketogenic</option>
            <option value="lacto ovo vegetarian">Lacto-ovo-vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="dairy free">Dairy free</option>
            <option value="paleolithic">Paleo</option>
            <option value="primal">Primal</option>
            <option value="whole 30">Whole 30</option>
        </select>
    </div>
    )
};