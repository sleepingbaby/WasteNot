import React from "react";
import { Stack, Typography } from "@mui/material";

const StrictRecipe = ({ title, steps, ingredients }) => {
  return (
    <Stack sx={{ color: "white", height: "100%", width: "100%" }}>
      <Typography>{title}</Typography>
      {ingredients.map((ingredient, index) => (
        <Typography key={index}>[{ingredient}]</Typography>
      ))}
      {steps.map((step, index) => (
        <Typography key={index}>
          {index}. {step}
        </Typography>
      ))}
    </Stack>
  );
};

export default StrictRecipe;
