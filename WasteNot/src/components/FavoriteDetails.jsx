import { useState } from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
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
/* TODO: ADD ON CLICK/MADE BUTTON TO INCREMENT COUNTER OF MADE MEALS.*/
const FavoriteCard = ({ recipe }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const instructions = `<li>${recipe.instructions.replace(/\n/g, "<li>")}</li>`;
  return (
    <Grid item key={recipe.id} xs={8} sm={6} md={4}>
      <Card
        id="recipe card"
        sx={{
          height: "fit-content",
          width: "fit-content",
          display: "flex",
          flexDirection: "column",
          boxShadow:
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
        }}
      >
        <div onClick={handleExpandClick} style={{ cursor: "pointer" }}>
          <div style={{ position: "relative" }}>
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
              height="400"
              width="300"
              image={recipe.image}
              sx={{
                filter: "blur(3px)",
              }}
            />
          </div>
          <CardActions>
            <ExpandFav>
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ExpandFav>
          </CardActions>
        </div>
        {/* <Button>Made?</Button> */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Divider />
          <Typography
            id="instructions"
            variant="h4"
            align="center"
            gutterBottom
          >
            Instructions
          </Typography>
          <Divider />
          <Typography>
            <List sx={{ listStyle: "decimal", pl: 2 }}>
              <ListItem sx={{ listStyle: "decimal", pl: 2 }}>
                <span
                  style={{}}
                  dangerouslySetInnerHTML={{ __html: instructions }}
                />
              </ListItem>
            </List>
          </Typography>
          <Divider />
          <Typography id="ingredients" variant="h4" align="center" gutterBottom>
            Ingredients
            <Divider />
          </Typography>
          <List
            sx={{
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
          >
            {recipe.extendedIngredients.map((ingredient, i) => (
              <ListItem sx={{ display: "list-item" }} key={i}>
                {/* {ingredient.original} */}
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
