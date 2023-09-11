import React from "react";
import Typography from "@mui/material/Typography";
import { Paper, Box, Stack, Button } from "@mui/material";
import "../styles/Font.css";
import { BorderAllRounded, BorderStyleRounded } from "@mui/icons-material";
import { useState, useEffect } from "react";
import api from "../utilities.jsx";

export default function RecipeCard({ data }) {

    const [userFavorites, setUserFavorites] = useState([]);
    
    const isFavorited = userFavorites.some(recipe => recipe.id === data.id);

    const handleFavorite = async (id, isFavorited) => {
        try {
          if (isFavorited) {
            const response = await api.delete(`recipe/${id}/`);
            if (response.status === 204) {
              setUserFavorites(prevFavorites => prevFavorites.filter(recipe => recipe.id !== id));
            }
          } else {
            const recipeResponse = await api.get(`spoon/recipe/${id}/`);
            if (recipeResponse) {
              const response = await api.post("recipe/", recipeResponse.data);
              if (response.status === 201) {
                setUserFavorites(prevFavorites => [...prevFavorites, recipeResponse.data]);
              }
            }
          }
        } catch (error) {
          console.log("problem toggling favorite status:", error);
        }
      };
      

    useEffect(() => {
    const fetchUserFavorites = async () => {
        try {
        const response = await api.get("recipe/");
        setUserFavorites(response.data.recipes);
        } catch (error) {
        console.log("Error fetching user favorites:", error);
        }
    };

    fetchUserFavorites();
    }, []);


    return (
    <Box>
        <Paper
        elevation={24}
        sx={{
            width: {
            xs: "80vw",
            sm: "20vw",
            md: "20vw",
            lg: "15vw",
            },

            height: {
            xs: "500px",
            sm: "30vw",
            md: "25vw",
            },

            padding: {
            xs: "2vw",
            sm: "1vw",
            },
            backgroundRepeat: "no-repeat",
            backgroundColor: "white",
            border: 6,
            borderColor: "#68A2B1",
        }}
        >
        <Stack
            sx={{
            height: "100%",
            width: "100%",
            textAlign: "center",
            }}
        >
            <Stack
            sx={{
                height: "100%",
                width: "100%",
            }}
            >
            <Stack
                sx={{
                height: "40%",
                width: "100%",
                backgroundImage: `url(${data.image})`,
                backgroundSize: "cover",
                boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;",
                }}
                style={{ borderRadius: "3%" }}
            ></Stack>
            <Typography
                sx={{
                fontSize: {
                    xs: "3vw",
                    sm: "1.5vw",
                    md: "1vw",
                },
                borderTop: 1,
                borderBottom: 1,
                marginTop: "1vh",
                }}
            >
                {data.title}
            </Typography>

            <Typography>{data.descriptions}</Typography>
            </Stack>
            <Button
            onClick={() => handleFavorite(data.id, isFavorited)}
            variant="contained"
            sx={{
                backgroundColor: "#68A2B1",
                ":hover": {
                backgroundColor: "#8ED7EA",
                },
                display:"flex",
                flexDirection: ""
              },
            }}
            >
                {isFavorited ? "UnFavorite" : "Favorite"}
            </Button>
        </Stack>
        </Paper>
    </Box>
    );
}
