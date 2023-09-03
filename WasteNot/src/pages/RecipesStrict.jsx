import { Stack, Typography, Box } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import api from "../utilities.jsx";
import { recipeContext } from "../contexts/RecipeContext";
import StrictRecipe from "../components/StrictRecipe.jsx";
import Loading from "../components/Loading.jsx";

const RecipesStrict = () => {
  const [strictList, setStrictList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { ingredientList } = useContext(recipeContext);
  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await api.post("strictsearch/", {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: `Give me a list of 3 recipes I can make using ONLY ${ingredientList.map(
                (obj) => obj.label
              )} with title, ingredients and steps in JSON format of {recipe1: {steps: [], title: "", ingredients: []}} with the recipe number corresponding to each recipe. `,
            },
          ],
          temperature: 0.7,
        });

        setStrictList(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("There was an error getting your recipes:", error);
      }
    };

    if (ingredientList) {
      getRecipes();
    }
  }, [ingredientList]);

  const showRecipes = strictList && !isLoading;

  return (
    <Stack height="100%" width="100%">
      {showRecipes ? (
        Object.keys(strictList).map((key) => {
          const recipe = strictList[key];
          return (
            <StrictRecipe
              key={recipe["title"]}
              title={recipe["title"]}
              steps={recipe["steps"]}
              ingredients={recipe["ingredients"]}
            />
          );
        })
      ) : (
        <Loading />
      )}
    </Stack>
  );
};

export default RecipesStrict;
