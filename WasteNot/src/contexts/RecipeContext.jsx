import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const recipeContext = createContext()

export function RecipeContextProvider({ children }){

    const [ingredientList, setIngredientList] = useState([]);

    return (
        <recipeContext.Provider value={{ ingredientList, setIngredientList }}>
            { children }
        </recipeContext.Provider>
    )
}