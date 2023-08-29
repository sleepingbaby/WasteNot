import React from "react";
import {
  Stack,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Paper,
} from "@mui/material";
import { ingredientObj } from "../data/utilityData";

const Ingredient = ({ name }) => {
  return (
    <Card elevation={3} sx={{ height: 150, width: 100, margin: "16px" }}>
      <CardMedia
        sx={{ height: 75 }}
        image={`https://spoonacular.com/cdn/ingredients_100x100/${ingredientObj[name]["image"]}`}
        title={name}
      />
      <CardContent
        sx={{
          backgroundColor: "black",
          height: 75,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: "1em",
            fontWeight: "bold",
            color: "white",
            padding: "8px",
            marginTop: "8px",
          }}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Ingredient;
