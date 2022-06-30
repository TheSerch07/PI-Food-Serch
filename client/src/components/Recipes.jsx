import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../store/actions"
import Recipe from "./Recipe";
import Pagination from "./Pagination";

export default function Recipes() {
    let recipes = useSelector((state) => state.filteredRecipes)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRecipes())
    }, [])

    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage, setRecipesPerPage] = useState(9);
    const indexOfLast = currentPage * recipesPerPage;
    const indexOfFirst = indexOfLast - recipesPerPage;
    const currentRecipes = recipes.slice(indexOfFirst, indexOfLast);

    function pagination(pageNumber) {
        setCurrentPage(pageNumber)
    }

    console.log(recipes)
    return (
        <div>
            <Pagination recipesPerPage={recipesPerPage} recipes={recipes.length} pagination={pagination}/>
            {currentRecipes.map((recipe) => {
                return <Recipe key={recipe.id} name={recipe.name} img={recipe.image} diet={recipe.diets.join(", ")} />
            })}
            <Pagination recipesPerPage={recipesPerPage} recipes={recipes.length} pagination={pagination}/>
        </div>
    )
}