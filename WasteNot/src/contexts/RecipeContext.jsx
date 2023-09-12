import { createContext, useEffect } from "react";
import { useState } from "react";
import api from "../utilities.jsx";

export const recipeContext = createContext();

export function RecipeContextProvider({ children, user }) {
  const [ingredientList, setIngredientList] = useState([]);
  const [recipeImage, setRecipeImage] = useState({});
  const [pantryList, setPantryList] = useState([]);

  useEffect(() => {
    if (user) {
      getPantryItems();
    }
  }, []);

  const getPantryItems = async () => {
    let response = await api.get("pantryitem/");
    setPantryList(response.data.pantry_items);
    setIngredientList(response.data.pantry_items);
  };

  return (
    <recipeContext.Provider
      value={{
        ingredientList,
        setIngredientList,
        recipeImage,
        setRecipeImage,
        getPantryItems,
        pantryList,
        setPantryList,
        user,
      }}
    >
      {children}
    </recipeContext.Provider>
  );
}
