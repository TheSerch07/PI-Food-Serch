import { useDispatch } from "react-redux";
import { fetchRecipes, orderRecipes, filterRecipesHealthScore } from "../store/actions"; 

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
    </div>
    )
};