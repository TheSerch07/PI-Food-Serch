import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRecipesName } from "../store/actions";

export default function SearchBar() {
    const [search, setSearch] = useState("");
    let dispatch = useDispatch();

    function onSubmit(e) {
        e.preventDefault()
        dispatch(fetchRecipesName(search))
        const input = document.getElementById("submit")
        input.value = ""
    };

    function onInputChange(e) {
        setSearch(e.target.value)
    };
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input id="submit" type="text" placeholder="Name Recipe!" onChange={onInputChange} />
                <input type="submit" value="Search Recipe!" />
            </form>
            <Link to="/recipe" >
                <button>Create A Recipe</button>
            </Link>
        </div>
    )
}