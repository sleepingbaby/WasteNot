import RecipeCarousel from "../components/RecipeCardCarousel";
import { useContext } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { recipeContext } from "../contexts/RecipeContext";

export default function ChooseRecipePage() {
  const { ingredientList } = useContext(recipeContext);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      {ingredientList.length > 0 ? (
        <Box
          sx={{
            width: "full",
            height: "full",
          }}
        >
          <RecipeCarousel />
        </Box>
      ) : (
        <Stack
          height="100%"
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Typography sx={{ fontSize: "5rem", color: "white" }}>
            No ingredients loaded...
          </Typography>
        </Stack>
      )}
    </Box>
  );
}
