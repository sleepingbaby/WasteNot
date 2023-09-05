import { useEffect, useState, useContext } from "react";
import { recipeContext } from "../contexts/RecipeContext.jsx";
import { Stack, Typography } from "@mui/material";
import api from "../utilities.jsx";

const StrictRecipe = ({ title, steps, ingredients, cook_time }) => {
  const [imgUrl, setImgUrl] = useState("");
  const { recipeImage, setRecipeImage } = useContext(recipeContext);
  useEffect(() => {
    const getImage = async () => {
      try {
        if (recipeImage[title]) {
          setImgUrl(recipeImage[title]);
        } else {
          const response = await api.get(
            `strictsearch/image/${title.split(" ").join("-")}/`
          );
          const newImgUrl = response.data.image_url;
          setImgUrl(newImgUrl);
          setRecipeImage((prevRecipeImage) => ({
            ...prevRecipeImage,
            [title]: newImgUrl,
          }));
        }
      } catch (error) {
        console.error("There was an error getting your image:", error);
      }
    };
    getImage();
  }, [title]);
  return (
    <Stack
      alignItems="center"
      p={2}
      sx={{
        color: "black",
        backgroundColor: "#b8d4db",
        borderRadius: "8px",
        height: "650px",
        width: "900px",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        height="20%"
        width="95%"
        mt={3}
      >
        <img
          src={imgUrl}
          style={{
            height: "150px",
            width: "150px",
            borderRadius: "8px",
            border: "4px solid #1a2e32",
          }}
        />
        <Stack width="80%" alignItems="center">
          <Typography sx={{ fontSize: "2rem", textAlign: "center" }}>
            {title}
          </Typography>
          <Typography>Cook Time: {cook_time}</Typography>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        height="75%"
        width="100%"
        alignItems="center"
        justifyContent="center"
        mt={3}
        gap={2}
      >
        <Stack
          p={2}
          sx={{
            height: "100%",
            borderRadius: "8px",
            backgroundColor: "#94bec9",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>Ingredients</Typography>
          {ingredients.map((ingredient, index) => (
            <Typography key={index}>{ingredient}</Typography>
          ))}
        </Stack>
        <Stack
          p={2}
          sx={{
            height: "100%",
            borderRadius: "8px",
            backgroundColor: "#94bec9",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>Directions</Typography>
          {steps.map((step, index) => (
            <Typography key={index}>
              {index + 1}. {step}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default StrictRecipe;
