import {
  Typography,
  Stack,
  Container,
  Paper,
  ListItem,
  List,
  Grid,
  Box
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../utilities.jsx";

const FullRecipe = () => {
  const { recipeId } = useParams();
  const [recipeDetails, setRecipeDetails] = useState([]);
  let instructions = "";

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

  console.log("recipe", recipeDetails.instructions);
  // console.log("instructions", instructions)
  return (
    <Stack
      id="mainpage"
      height="100vh"
      width="100vw"
      justifyContent="center"
      alignItems="center"
    >
      <Container maxWidth="lg"> 
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            marginBottom: 3,
            borderRadius: "16px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: 32,
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
            {recipeDetails.title}
          </Typography>
          <img
            src={recipeDetails.image}
            alt={recipeDetails.title}
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "8px",
              marginBottom: "16px", 
            }}
          />
          <Grid container spacing={2}> 
            <Grid item xs={12} sm={6}>
              <Box sx={{ fontWeight: "bold" }}>Servings:</Box>
              <Typography
                variant="body1"
                sx={{
                  marginTop: 1,

                }}
              >
                {recipeDetails.servings}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ fontWeight: "bold" }}>
                Prep Time:
              </Box>
              <Typography
                variant="body1"
                sx={{
                  marginTop: 1,
                }}
              >
                {recipeDetails.prepTime}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            variant="body1"
            sx={{
              marginTop: 2,
          
            }}
          >
            <span dangerouslySetInnerHTML={{ __html: recipeDetails.summary }} />
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: 24,
              fontWeight: "bold",
              marginTop: 3, 
            }}
          >
            Instructions:
          </Typography>
          {recipeDetails.instructions && (
            <List
              sx={{
                listStyle: "decimal",
                marginTop: 2,
              }}
            >
              <ListItem sx={{ pl: 2 }}>
                <div dangerouslySetInnerHTML={{ __html: instructions }} />
              </ListItem>
            </List>
          )}
        </Paper>
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
      </Container>
    </Stack>
  );
};

export default FullRecipe;
