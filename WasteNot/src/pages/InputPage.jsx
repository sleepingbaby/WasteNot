import { useState, useContext, useEffect } from "react";
import {
  Stack,
  FormControlLabel,
  TextField,
  Button,
  Box,
  Autocomplete,
  Switch,
} from "@mui/material";
import { ingredients } from "../data/utilityData";
import Ingredient from "../components/Ingredient";
import { recipeContext } from "../contexts/RecipeContext";
import { useNavigate } from "react-router-dom";
import CustomPaper from "../components/CustomPaper";

const InputPage = () => {
  const [newIngredient, setNewIngredient] = useState("");
  const [isStrict, setIsStrict] = useState(false);
  const {
    ingredientList,
    setIngredientList,
    getPantryItems,
    user,
  } = useContext(recipeContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      getPantryItems();
    }
  }, [user]);

  const handleSwitchChange = () => {
    setIsStrict(!isStrict);
  };

  const handleGetRecipes = () => {
    if (isStrict) {
      navigate("/strict_recipes");
    } else {
      navigate("/recipes");
    }
  };

  const handleAddIngredient = () => {
    if (!newIngredient) {
      return;
    }
    if (!ingredientList.includes(newIngredient)) {
      setIngredientList((prevIngredients) => [
        ...prevIngredients,
        newIngredient,
      ]);
    } else {
      alert("Ingredient already added!");
    }
    setNewIngredient("");
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        backgroundColor="#b8d4db"
        height="90%"
        width="90%"
        borderRadius="8px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ boxShadow: 7 }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          mb={2}
          mt={2}
          width="80%"
        >
          <Autocomplete
            options={ingredients}
            PaperComponent={CustomPaper}
            className="autocomplete"
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
            sx={{
              width: "100%",
              "& + .MuiAutocomplete-popper .MuiAutocomplete-option": {
                textTransform: "capitalize",
              },
            }}
            value={newIngredient}
            onChange={(newValue) => {
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
            onClick={handleAddIngredient}
          >
            Add
          </Button>
        </Stack>

        <Stack
          height="70%"
          width="80%"
          sx={{
            backgroundColor: "#1a2e32",
            borderRadius: "6px",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
              overflow: "scroll",
              flexWrap: "wrap",
              width: "100%",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {ingredientList.map((ingredient) => (
              <Ingredient
                key={ingredient.id}
                name={ingredient.label}
                ingredientList={ingredientList}
                setIngredientList={setIngredientList}
              />
            ))}
          </Stack>
        </Stack>

        <FormControlLabel
          control={<Switch checked={isStrict} onChange={handleSwitchChange} />}
          label="Strict Search"
        />

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#68a2b1",
            width: "300px",
            color: "#033015",
            margin: "8px",
            fontWeight: "bolder",
            "&:hover": {
              backgroundColor: "#1a2e32",
              color: "white",
            },
          }}
          onClick={handleGetRecipes}
        >
          Get Recipes
        </Button>
      </Box>
    </Stack>
  );
};

export default InputPage;
