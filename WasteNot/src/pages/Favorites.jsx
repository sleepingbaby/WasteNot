import { useState, useEffect } from "react";
import FavoriteCard from "../components/FavoriteDetails.jsx";
import ChatBotComponent from "../components/ChatBotComponent.jsx";
import {
Stack,
Box,
    Container,
    Typography,
    Grid,
    Dialog,
    Button,
  } from "@mui/material";
  import api from "../utilities.jsx";


  const Favorites = () => {
    const [fav, setFav] = useState([]);
    const [wasteBotOpen,setWasteBotOpen] = useState(false)

    const handleClickOpen = () => {
      setWasteBotOpen(true);
    };
  
    const handleClose = () => {
      setWasteBotOpen(false);
    };

    useEffect(() => {
        const getFavorites = async () => {
            try {
                const response = await api.get("recipe/");
                setFav(response.data.recipes);
            } catch (error) {
                console.error(error);
            }
        }
        getFavorites();
    }, []);
    
    
    return (
        <Stack
            id="mainpage"
            height="100%"
            width="100%"
            justifyContent="center"
            alignItems="center"
        >

            <Stack
                id="recipe-container"
                sx={{
                  height: { xs: "95%", sm: "95%" },
                  width: { xs: "90%", sm: "90%" },
                  backgroundColor: "#b8d4db",
                  borderRadius: "8px",
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
             
            <Box
              id="header-bg"
              sx={{
                bgcolor: "background.paper",
                borderTopRightRadius: "8px",
                borderTopLeftRadius: "8px",
                py:2
              }}
            >
              <Container maxWidth="md">
                <Typography
                  id="recipe-header"
                  variant="h2"
                  align="center"
                >
                  Your Favorites
                </Typography>
              </Container>
              
            </Box>
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
                 {wasteBotOpen ? "End Chat" :  "Open Chat"} 
                </Button>
                <Dialog open={wasteBotOpen} onClose={handleClose}>  
               <ChatBotComponent/> 
                </Dialog>
                
                </Container>
               <Container sx={{ py: 8 }}>
                    <Grid container spacing={1} justifyContent={"center"}>
                        {fav.map((recipe,i) => (
                            <FavoriteCard key={i} recipe={recipe} />
                        ))}
                    </Grid>
               </Container>
            </Stack>
        </Stack>
    );
}
export default Favorites