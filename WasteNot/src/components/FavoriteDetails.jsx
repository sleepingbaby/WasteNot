import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import LaunchIcon from "@mui/icons-material/Launch";

import {
  Grid,
  Card,
  CardMedia,
  CardActions,
  Collapse,
  IconButton,
  Typography,
  Divider,
  Button,
  ListItem,
  List,
} from "@mui/material";

const ExpandFav = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const FavoriteCard = ({ recipe }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const distinctIngredients = [];

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  for (const ingredient of recipe.extendedIngredients) {
    if (!distinctIngredients.some((el) => el.id === ingredient.id)) {
      distinctIngredients.push(ingredient);
    }
  }

  const instructions = `<li>${recipe.instructions.replace(/\n/g, "<li>")}</li>`;
  return (
    <Grid item key={recipe.id} xs={6} sm={5} md={3}>
      <Card
        id="recipe card"
        sx={{
          height: "fit-content",
          width: "fit-content",
          display: "flex",
          flexDirection: "column",
          boxShadow:
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          marginY: 1,
        }}
      >
        <div style={{ cursor: "pointer" }}>
          <div
            onClick={() => {
              navigate(`/details/${recipe.id}`);
            }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                position: "absolute",
                zIndex: "1",
                width: "100%",
                top: "50%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <Typography
                component="h1"
                align="center"
                sx={{
                  color: "#FFFFFF",
                  fontSize: "22px",
                  fontWeight: "900",
                  bgcolor: "#1a2e32",
                }}
              >
                {recipe.title}
              </Typography>
            </div>
            <CardMedia
              component="img"
              alt={recipe.title}
              height="300"
              width="300"
              image={recipe.image}
              sx={{
                filter: "blur(2px)",
              }}
            />
          </div>
          <CardActions>
            <ExpandFav onClick={handleExpandClick}>
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ExpandFav>
          </CardActions>
        </div>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Button
            onClick={() => {
              navigate(`/details/${recipe.id}`);
            }}
          >
            <LaunchIcon sx={{ marginRight: 1 }} /> View Full Recipe
          </Button>
          <Divider />
          <Typography id="instructions" variant="h4" align="center">
            Instructions
          </Typography>
          <Divider />
          <List sx={{ listStyle: "decimal", pl: 2 }}>
            <ListItem sx={{ pl: 2 }}>
              <div dangerouslySetInnerHTML={{ __html: instructions }} />
            </ListItem>
          </List>
          <Divider />
          <Typography id="ingredients" variant="h4" align="center">
            Ingredients
            <Divider />
          </Typography>
          <List
            sx={{
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
          >
            {distinctIngredients.map((ingredient, i) => (
              <ListItem sx={{ display: "list-item" }} key={i}>
                {ingredient.amount} {ingredient.unit} -{" "}
                {ingredient.nameClean.charAt(0).toUpperCase() +
                  ingredient.nameClean.slice(1)}
              </ListItem>
            ))}
          </List>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default FavoriteCard;
