import { useEffect, useState, useContext } from "react";
import {
  Stack,
  TextField,
  Button,
  Box,
  Autocomplete,
  Typography,
} from "@mui/material";
import { ingredients } from "../data/utilityData";
import Ingredient from "../components/Ingredient";
import api from "../utilities.jsx";
import { recipeContext } from "../contexts/RecipeContext";

const Pantry = () => {
  const [newIngredient, setNewIngredient] = useState("");
  const { getPantryItems, pantryList, setPantryList, user } = useContext(
    recipeContext
  );

  useEffect(() => {
    if (user) {
      getPantryItems();
    }
  }, []);

  const handleAddIngredient = (e) => {
    e.preventDefault();
    if (!newIngredient) {
      return;
    }
    if (!pantryList.includes(newIngredient)) {
      setPantryList((prevIngredients) => [...prevIngredients, newIngredient]);
      addPantryItem(newIngredient);
    } else {
      alert("Ingredient already added!");
    }
    setNewIngredient("");
  };

  const addPantryItem = async (newIngredient) => {
    await api.post("pantryitem/", {
      item_id: newIngredient.id,
      image: newIngredient.image,
      label: newIngredient.label,
    });
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "100%",
        width: "100%",
        backgroundColor: "#1a2e32",
        backgroundImage: `url(src/assets/pantry_background.png)`,
        // backgroundImage: `url(src/assets/pantry2.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
    >
      {/* <Stack width="90%">
        <Typography sx={{ color: "white", fontSize: "2rem" }}>
          Pantry
        </Typography>
      </Stack> */}
      {/* <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          marginBottom: "20px",
        }}
      >
        My Pantry
      </Typography> */}
      {/* 
      <Box
        // backgroundColor="#b8d4db"
        height="90%"
        width="90%"
        // borderRadius="8px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        // sx={{ boxShadow: 7 }}
      > */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        mb={2}
        width="40%"
      >
        <Autocomplete
          options={ingredients}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          sx={{ width: "100%" }}
          value={newIngredient}
          onChange={(event, newValue) => {
            setNewIngredient(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              id="filled-basic"
              label="Ingredients"
              variant="filled"
              sx={{
                width: "100%",
                backgroundColor: "white",
                input: { color: "#1a2e32" },
                borderRadius: "6px",
                "& label.Mui-focused": { color: "#1a2e32" },
                "& label.MuiInputLabel-root": { color: "#1a2e32" },
                "& .MuiFilledInput-underline:after": {
                  borderBottom: "none",
                },
                "& .MuiInputBase-root:hover:not(.Mui-disabled):before": {
                  borderBottom: "none",
                },
                "& .MuiFilledInput-root:before": {
                  borderBottom: "none",
                },
              }}
            />
          )}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#68a2b1",
            height: "100%",
            width: "10%",
            color: "#033015",
            margin: "8px",
            fontWeight: "bolder",
            "&:hover": {
              backgroundColor: "#1a2e32",
              color: "white",
            },
          }}
          onClick={(e) => handleAddIngredient(e)}
        >
          Add
        </Button>
      </Stack>

      <Stack
        height="70%"
        width="50%"
        justifyContent="center"
        // sx={{
        //   backgroundColor: "#1a2e32",
        //   borderRadius: "6px",
        //   boxShadow:
        //     "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        // }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{
            overflow: "scroll",
            flexWrap: "wrap",
            // width: "50%",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {pantryList.map((ingredient) => (
            <Ingredient
              key={ingredient.id}
              id={ingredient.id}
              name={ingredient.label}
              ingredientList={pantryList}
              setIngredientList={setPantryList}
            />
          ))}
        </Stack>
      </Stack>
      {/* </Box> */}
    </Stack>
  );
};

export default Pantry;
