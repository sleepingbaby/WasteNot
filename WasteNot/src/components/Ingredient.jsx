import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { ingredientObj } from "../data/utilityData";
import api from "../utilities.jsx";

const Ingredient = ({ id, name, ingredientList, setIngredientList }) => {

  const handleDelete = () => {
    setIngredientList(ingredientList.filter((obj) => name !== obj["label"]));
    if (location.pathname === "/Pantry") {
      deletePantryItem();
    }
  };

  const deletePantryItem = async() => {
    await api.delete(`pantryitem/${id}`);
  };

  return (
    <Card
      elevation={3}
      sx={{
        height: 150,
        width: 100,
        margin: "16px",
        "& .MuiIconButton-root": { padding: 0 },
      }}
    >
      <Stack alignItems="flex-end">
        <IconButton onClick={handleDelete}>
          <Close fontSize="small" />
        </IconButton>
      </Stack>

      <CardMedia
        sx={{ height: "50%", margin: "8px", marginTop: 0, objectFit: "fit" }}
        image={`https://spoonacular.com/cdn/ingredients_100x100/${ingredientObj[name]["image"]}`}
        title={name}
      />
      <Divider variant="middle" sx={{ backgroundColor: "black" }} />
      <CardContent
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "45%",
          padding: 0,
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: ".7em",
            fontWeight: "bold",
            textAlign: "center",
            color: "black",
          }}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Ingredient;
