import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../store/actions"
import Recipe from "./Recipe";

export default function Recipes() {
    let recipes = useSelector((state) => state.filteredRecipes)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRecipes())
    }, [])

    console.log(recipes)
    return (
        <div>
            {recipes.map((recipe) => {
                return <Recipe key={recipe.id} name={recipe.name} img={recipe.image} diet={recipe.diets.join(", ")} />
            })}
        </div>
    )
}