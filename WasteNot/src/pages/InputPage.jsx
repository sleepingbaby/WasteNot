import { useEffect, useState } from "react";
import {
  Stack,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  Button,
  Box,
  Autocomplete,
} from "@mui/material";
import { ingredients } from "../data/utilityData";
import Ingredient from "../components/Ingredient";

const InputPage = () => {
  const [ingredientList, setIngredientList] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

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
          width="80%"
        >
          <Autocomplete
            options={ingredients}
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
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
              <Ingredient key={ingredient.id} name={ingredient.label} />
            ))}
          </Stack>
        </Stack>
        <FormGroup
          sx={{ display: "flex", flexDirection: "row", padding: "8px" }}
        >
          <FormControlLabel
            control={<Checkbox style={{ color: "#1a2e32" }} />}
            label="Vegan"
          />
          <FormControlLabel
            control={<Checkbox style={{ color: "#1a2e32" }} />}
            label="Vegetarian"
          />
          <FormControlLabel
            control={<Checkbox style={{ color: "#1a2e32" }} />}
            label="Nut-Free"
          />
          <FormControlLabel
            control={<Checkbox style={{ color: "#1a2e32" }} />}
            label="Dairy-Free"
          />
        </FormGroup>
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
        >
          Get Recipes
        </Button>
      </Box>
    </Stack>
  );
};

export default InputPage;
