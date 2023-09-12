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
    } else {
      return;
    }
  }, [user]);

  const getPantryItems = async () => {
    try {
      const response = await api.get("pantryitem/");
      if (response.status === 401) {
        console.error("Unauthorized: Please log in");
      } else {
        setPantryList(response.data.pantry_items);
        setIngredientList(response.data.pantry_items);
      }
    } catch (error) {
      console.log("An error occurred");
    }
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
