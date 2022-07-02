import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { fetchDiets, postRecipe } from "../store/actions"
import { useDispatch} from "react-redux";

function validateInput(input) {
    let errors = {};
    if (!input.name) {
        errors.name = "This field can't be blank!"
    }
    if (!input.resume) {
        errors.resume = "This field can't be blank!"
    } 
    if (!input.healthScore) {
        errors.healthScore = "This field can't be blank!"
    }
    if (!input.steps) {
        errors.steps = "This field can't be blank!"
    }
    return errors
}

export default function CreateRecipe() {
    const dispatch = useDispatch();
    // const recipes = useSelector((state) => state.recipes);
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchDiets())
    }, [dispatch])

    const [errors, setErrors] = useState({})
    const [recipeInput, setRecipeInput] = useState({
        name: "",
        resume: "",
        healthScore: "",
        steps: "",
        diet: []
    });

function handleChange(e) {
    setRecipeInput({
        ...recipeInput,
        [e.target.name] : e.target.value
    });
    setErrors(validateInput({
        ...recipeInput,
        [e.target.name] : e.target.value
    }));
};

function handleSubmit(e) {
    e.preventDefault()
    dispatch(postRecipe(recipeInput))
    alert("Recipe created!")
    setRecipeInput({
        name: "",
        resume: "",
        healthScore: "",
        steps: "",
        diet: []
    })
    history.push("/home")
};

function handleSelect(e) {
    setRecipeInput({
        ...recipeInput,
        diet: [...recipeInput.diet, e.target.value]
    })
    setErrors(validateInput({
        ...recipeInput,
        diet: [...recipeInput.diet, e.target.value]
    }));
};

function filterDiets(diet) {
    setRecipeInput({
        ...recipeInput,
        diet: recipeInput.diet.filter(d => d !== diet)
    });
};

    return (
    <div>
        <Link to="/home">
            <button>Back to Home!</button>
        </Link>
        <h1>Create a Recipe!</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={recipeInput.name} onChange={handleChange}/>
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
                <label>Resume:</label>
                <input type="text" name="resume" value={recipeInput.resume} onChange={handleChange}/>            
                {errors.resume && <p>{errors.resume}</p>}
            </div>
            <div>
                <label>Health Score:</label>
                <input type="range" value={recipeInput.healthScore} name="healthScore" min="1" max="100" onChange={handleChange}/>
                {errors.healthScore && <p>{errors.healthScore}</p>}
            </div>
            <div>
                <label>Steps:</label>
                <input type="text" name="steps" value={recipeInput.steps} onChange={handleChange}/> 
                {errors.steps && <p>{errors.steps}</p>}           
            </div>
            <div>
                <label>Diets:</label>
                <select onChange={handleSelect}>
                    <option value="gluten free">Gluten free</option>
                    <option value="ketogenic">Ketogenic</option>
                    <option value="lacto ovo vegetarian">Lacto-ovo-vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="dairy free">Dairy free</option>
                    <option value="paleolithic">Paleo</option>
                    <option value="primal">Primal</option>
                    <option value="whole 30">Whole 30</option>
                </select>
                {errors.diet && <p>{errors.diet}</p>}
            </div>
            {console.log(recipeInput)}
            {recipeInput.diet.map((recipe) => {
                return <div key={recipe}><button onClick={() => filterDiets(recipe)}>X</button><h6>{recipe}</h6></div>
            })}
            {(Object.entries(errors).length > 0) ? <button type="button" onClick={() => alert("Complete all fields!")}>Create!</button> : <button type="submit">Create!</button>}
        </form>
    </div>)
}