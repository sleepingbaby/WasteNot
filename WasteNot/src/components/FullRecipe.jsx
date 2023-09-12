import {
  Typography,
  Stack,
  Container,
  ListItem,
  List,
  Grid,
  Box,
  Divider,
  Button,
  Dialog,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../utilities.jsx";
import ChatBotComponent from "../components/ChatBotComponent.jsx";

const FullRecipe = () => {
  const { recipeId } = useParams();
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [wasteBotOpen, setWasteBotOpen] = useState(false);
  const distinctIngredients = [];
  let instructions = "";
  let hours = "";
  let minutes = "";
  let servingsYield = "";
  let servingsYield1 = "";
  let result = "";

  const handleClickOpen = () => {
    setWasteBotOpen(true);
  };
  const handleClose = () => {
    setWasteBotOpen(false);
  };

  useEffect(() => {
    const getRecipeDetails = async () => {
      try {
        const response = await api.get(`recipe/${recipeId}`);
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
  if (recipeDetails.extendedIngredients) {
    for (const ingredient of recipeDetails.extendedIngredients) {
      if (!distinctIngredients.some((el) => el.id === ingredient.id)) {
        distinctIngredients.push(ingredient);
      }
    }
  }

  return (
    <Stack
      id="mainpage"
      height="100vh"
      width="100vw"
      justifyContent="center"
      alignItems="center"
    >
      <Container>
        <Button
          onClick={handleClickOpen}
          sx={{
            backgroundColor: "#68a2b1",
            color: "#033015",
            fontWeight: "bolder",
            "&:hover": {
              backgroundColor: "#1a2e32",
              color: "white",
            },
          }}
        >
          {wasteBotOpen ? "End Chat" : "Open Chat"}
        </Button>
        <Dialog open={wasteBotOpen} onClose={handleClose}>
          <ChatBotComponent />
        </Dialog>
      </Container>
      <Container
        sx={{
          bgcolor: "#f5f5f5",
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
          alignItems="center"
          justifyContent="space-around"
          sx={{
            height: { xs: "100%", sm: "100%", md: "50%", lg: "60%" },
            width: "100%",
          }}
        >
          <Typography
            id="header"
            variant="h1"

            display="flex"
            alignItems="center"
            sx={{
              width: { xs: "100%", sm: "100%", md: "40%", lg: "35%" },
              fontSize: {
                xs: "28px",
                sm: "36px",
                md: "48px",
                lg: "64px",
              },
              marginTop: 4,
            }}
          >
            {recipeDetails.title}
          </Typography>
          <Grid
            item
            xs={12}
            sm={6}
            id="image"

            justifyContent="center"
            sx={{
              width: "100%",
              height: "auto",
              marginTop: 4,
            }}
          >
            <img
              src={recipeDetails.image}
              alt={recipeDetails.title}
              style={{
                maxWidth: "100%",
              }}
            />
          </Grid>
        </Grid>
        <Grid
          id="middle-container"
          container
          spacing={2}
          sx={{
            marginTop: 6,
          }}
        >
          <Grid
            item
            id="time-serving-container"
            xs={12}
            sm={5}
            sx={{
              marginTop: 2,
              mx: 3,
              width: "100%",
            }}
          >
            <Divider />
            <Box id="time-container" display="flex" flexDirection="row">
              <Typography sx={{ fontWeight: "bold" }}>Time </Typography>
              <Typography variant="body1">
                {" : "}
                {hours} {minutes}
              </Typography>
            </Box>
            <Box id="servings-container" display="flex" flexDirection="row">
              <Typography sx={{ fontWeight: "bold" }}> Servings </Typography>
              <Typography variant="body1">
                {" : "}
                {result}
              </Typography>
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
          alignItems="space-around"
          sx={{
            marginBottom: 6,
            width: "100%",
            height: { lg: "25%", md: "25%", sm: "20%" },
          }}
        >
          <Box
            id="ingredients-container"
            display="flex"
            flexDirection="column"
            sx={{ mx: 3 }}
            width={{ xs: "100%", sm: "100%", md: "40%", lg: "40%" }}
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
                marginTop: "16px",
              }}
            >
              {distinctIngredients &&
                distinctIngredients.map((ingredient, i) => (
                  <ListItem
                    sx={{
                      display: "list-item",
                      padding: "0",
                    }}
                    key={i}
                  >
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
            width={{ xs: "100%", sm: "100%", md: "100%", lg: "40%" }}
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
                height: { lg: "25%", md: "25%", sm: "20%" },
              }}
            >
              {recipeDetails.instructions && (
                <List
                  sx={{
                    listStyle: "decimal",
                    marginTop: 2,
                  }}
                >
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
    </Stack>
  );
};

export default FullRecipe;
