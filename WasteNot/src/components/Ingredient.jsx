import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";
import { ingredientObj } from "../data/utilityData";

const Ingredient = ({ name }) => {
  return (
    <Card elevation={3} sx={{ height: 150, width: 100, margin: "16px" }}>
      <CardMedia
        sx={{ height: "50%" }}
        image={`https://spoonacular.com/cdn/ingredients_100x100/${ingredientObj[name]["image"]}`}
        title={name}
      />
      <CardContent
        sx={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "50%",
          padding: 0,
          paddingTop: "16px",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: ".8em",
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
          }}
        >
          {name}
        </Typography>
        <Button size="small" sx={{ fontSize: ".5em" }}>
          Remove
        </Button>
      </CardContent>
    </Card>
  );
};

export default Ingredient;
