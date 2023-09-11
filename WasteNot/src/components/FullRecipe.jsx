import {
  Typography,
  Stack,
  Container,
  Paper,
  ListItem,
  List,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../utilities.jsx";

const FullRecipe = () => {
  const { recipeId } = useParams();
  const [recipeDetails, setRecipeDetails] = useState([]);
  let instructions = "";

  let hours = "";
  let minutes = "";
  let servingsYield = "";
  let servingsYield1 = "";
  let result = "";

  useEffect(() => {
    const getRecipeDetails = async () => {
      try {
        const response = await api.get(`recipe/${recipeId}`);
        // console.log("response", response.data.recipe)
        setRecipeDetails(response.data.recipe);
      } catch (error) {
        console.error(error);
      }
    };
    getRecipeDetails();
  }, []);

  if (recipeDetails.instructions) {
    instructions = `<li>${recipeDetails.instructions.replace(
      /\n/g,
      "<li>"
    )}</li>`;
  }

  if (recipeDetails.summary) {
    const regex1 = /(\w+)\s+servings/gi;
    const regex2 = /serves\s+(\w+)/gi;
    servingsYield = recipeDetails.summary.match(regex1);
    servingsYield1 = recipeDetails.summary.match(regex2);
    if (servingsYield) {
      result = servingsYield[0].split(" ")[0];
    } else if (servingsYield1) {
      result = servingsYield1[0].split(" ")[1];
    } else {
      result = "Unavailable";
    }
    console.log("result", result);
  }

  if (recipeDetails.summary) {
    const regex = /(\w+)\s+hours/gi;
    hours = recipeDetails.summary.match(regex);
  }
  if (recipeDetails.summary) {
    const regex = /(\w+)\s+minutes/gi;
    minutes = recipeDetails.summary.match(regex);
  }
  return (
    <Stack
      id="mainpage"
      height="100vh"
      width="100vw"
      justifyContent="center"
      alignItems="center"
    >
      <Container
        id="full-recipe-container"
        sx={{
          bgcolor: "#f5f5f5",
          // padding: 3,
          borderRadius: "8px",
          height: "85vh",
          width: "95vw",
          boxShadow: `0 0 20px rgba(210, 210, 210, 0.2),
            0 0 20px rgba(210, 210, 210, 0.2),
            0 0 20px rgba(210, 210, 210, 0.2)`,
          overflow: "scroll",
          "::-webkit-scrollbar": {
            width: "0",
            background: "transparent",
          },
        }}
      >
        <Grid
          id="image-and-title"
          container
          spacing={{ xs: 2, md: 1 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: { md: "100%", sm: "20%" },
            height: { lg: "40%", sm: "20%" },
          }}
          // height="50%"
        >
          <Typography
            // flexWrap={"wrap"}
            id="header"
            variant="h1"
            sx={{
              width: "40%",

              // height: { lg: "60%", sm: "40%" },
              fontSize: {
                xs: "28px",
                sm: "36px",
                md: "48px",
                lg: "64px",
              },
              marginTop: 4,

              // fontWeight: "bold",
              // marginBottom: 2,
            }}
          >
            {recipeDetails.title}
          </Typography>
          <Grid
            item
            xs={12}
            sm={6}
            id="image"
            sx={{
              width: "40%",
              marginBottom: "50px"
            }}
          >
            <img
              src={recipeDetails.image}
              alt={recipeDetails.title}
              style={{
                maxWidth: "100%",
                paddingTop: "90px",
                paddingLeft:"10px",

              }}
            />
          </Grid>
        </Grid>
        <Grid
          id="middle-container"
          container
          spacing={2}
          sx={{
            marginBottom: 6,
            width: { lg: "100%", md: "40%", sm: "20%" },
            height: { lg: "25%", md: "25%", sm: "20%" },
          }}
        >
          <Grid
            item
            id="time-serving-container"
            xs={12}
            sm={5}
            sx={{
              marginTop: 2,
              marginBottom: 16,
              mx: 3,
            }}
          >
            <Divider />

            <Box id="time-container" display="flex" flexDirection="row">
              <Typography sx={{ fontWeight: "bold" }}>Time: </Typography>
              <Typography variant="body1">
                {hours} {minutes}
              </Typography>
            </Box>
            <Box id="servings-container" display="flex" flexDirection="row">
              <Typography sx={{ fontWeight: "bold" }}> Servings: </Typography>
              <Typography variant="body1">{result}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="body1"
              sx={{
                marginTop: 2,
              }}
            >
              <span
                dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}
              />
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          sx={{
            marginBottom: 6,
            width: { lg: "100%", md: "40%", sm: "80%" },
            height: { lg: "25%", md: "25%", sm: "20%" },
          }}
        >
          <Box
            id="ingredients-container"
            display="flex"
            flexDirection="column"
            width="40%"
            sx={{ mx: 3 }}
          >
            <Divider
              sx={{ borderWidth: 3, borderColor: "black", marginTop: 4 }}
            />

            <Typography
              variant="h2"
              sx={{
                fontSize: 24,
                fontWeight: "bold",
                marginTop: 1,
              }}
            >
              Ingredients:
            </Typography>
            <List
              sx={{
                listStyleType: "disc",
                listStylePosition: "inside",
              }}
            >
              {recipeDetails.extendedIngredients &&
                recipeDetails.extendedIngredients.map((ingredient, i) => (
                  <ListItem sx={{ display: "list-item" }} key={i}>
                    {ingredient.amount} {ingredient.unit} -{" "}
                    {ingredient.nameClean.charAt(0).toUpperCase() +
                      ingredient.nameClean.slice(1)}
                  </ListItem>
                ))}
            </List>
          </Box>
          <Box
            id="instructions-container"
            display="flex"
            flexDirection="column"
            flexWrap={"wrap"}
            width="40%"
            sx={{ mx: 3 }}
          >
            <Divider
              sx={{ borderWidth: 3, borderColor: "black", marginTop: 4 }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: 24,
                fontWeight: "bold",
                marginTop: 1,
              }}
            >
              Instructions:
            </Typography>
            <Container
              sx={{
                marginBottom: 6,
                width: { lg: "100%", md: "40%", sm: "100%" },
                height: { lg: "25%", md: "25%", sm: "20%" },
          
              }}
            >
              {recipeDetails.instructions && (
                <List
                  sx={{
                    listStyle: "decimal",marginTop: 2,
                  }}>

                    <div dangerouslySetInnerHTML={{ __html: instructions }} />

                </List>
              )}
            </Container>
          </Box>
        </Grid>
      </Container>
      <Link
        style={{
          color: "white",
          fontSize: "16px",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
        }}
        to="/favorites"
      >
        <ArrowBackIcon sx={{ fontSize: "large", marginRight: "8px" }} />
        Back to Favorites
      </Link>
      {/* </Container> */}
    </Stack>
  );
};

export default FullRecipe;
