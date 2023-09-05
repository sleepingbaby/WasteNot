import { createContext } from "react";
import { useState } from "react";

export const recipeContext = createContext();

export function RecipeContextProvider({ children }) {
  const [ingredientList, setIngredientList] = useState([]);
  const [recipeImage, setRecipeImage] = useState({});

  return (
    <recipeContext.Provider
      value={{
        ingredientList,
        setIngredientList,
        recipeImage,
        setRecipeImage,
      }}
    >
      {children}
    </recipeContext.Provider>
  );
}
