import RecipeCarousel from "../components/RecipeCardCarousel";
import { Box } from "@mui/material";

export default function ChooseRecipePage() {
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
      <Box
        sx={{
          width: "full",
          height: "full",
        }}
      >
        <RecipeCarousel />
      </Box>
    </Box>
  );
}
