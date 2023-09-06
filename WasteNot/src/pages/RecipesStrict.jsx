import { Stack } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import api from "../utilities.jsx";
import { recipeContext } from "../contexts/RecipeContext";
import StrictRecipe from "../components/StrictRecipe.jsx";
import Loading from "../components/Loading.jsx";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const RecipesStrict = () => {
  const [strictList, setStrictList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { ingredientList } = useContext(recipeContext);
  const [recipeNumber, setRecipeNumber] = useState(1);
  const handleLeftClick = () => {
    if (recipeNumber === 1) {
      setRecipeNumber(3);
    } else {
      setRecipeNumber((prev) => (prev -= 1));
    }
  };
  const handleRightClick = () => {
    if (recipeNumber === 3) {
      setRecipeNumber(1);
    } else {
      setRecipeNumber((prev) => (prev += 1));
    }
  };
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
              )} with title, ,cook time, ingredients and steps in JSON format of {recipe1: {steps: [], title: "", cook_time: "", ingredients: []}} with the recipe number corresponding to each recipe. `,
            },
          ],
          temperature: 0.3,
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
  let recipe = null;
  if (showRecipes) {
    recipe = strictList[`recipe${recipeNumber}`];
  }

  return (
    <Stack
      height="100%"
      width="100%"
      alignItems="center"
      justifyContent="center"
    >
      {showRecipes ? (
        <Stack direction="row" alignItems="center" justifyContent="center">
          <ChevronLeft
            onClick={handleLeftClick}
            fontSize="large"
            sx={{
              color: "white",
              borderRadius: "50%",
              "&:hover": { backgroundColor: "orange", cursor: "pointer" },
              marginRight: "12px",
            }}
          />
          <StrictRecipe
            key={recipe["title"]}
            title={recipe["title"]}
            steps={recipe["steps"]}
            cook_time={recipe["cook_time"]}
            ingredients={recipe["ingredients"]}
          />
          <ChevronRight
            onClick={handleRightClick}
            fontSize="large"
            sx={{
              color: "white",
              borderRadius: "50%",
              "&:hover": { backgroundColor: "orange", cursor: "pointer" },
              marginLeft: "12px",
            }}
          />
        </Stack>
      ) : (
        <Loading />
      )}
    </Stack>
  );
};

export default RecipesStrict;
