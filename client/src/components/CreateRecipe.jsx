import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function CreateRecipe() {
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes);
    const history = useHistory();

    const [recipeInput, setRecipeInput] = useState({
        name: "",
        resume: "",
        healthScore: "",
        steps: []
    }) 

    return (
    <div>
        <Link to="/home">
            <button>Back to Home!</button>
        </Link>
        <h1>Create a Recipe!</h1>
        <form>
            <div>
                <label>Name:</label>
                <input type="text" name="name"/>
            </div>
            <div>
                <label>Resume:</label>
                <input type="text" name="resume"/>            
            </div>
            <div>
                <label>Health Score:</label>
                <input type="range" name="health score" min="1" max="100"/>
            </div>
            <div>
                <label>Steps:</label>
                <input type="text" name="steps"/>            
            </div>
        </form>
    </div>)
}