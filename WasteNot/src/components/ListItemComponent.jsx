import { ListItem, ListItemButton, ListItemText, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ListItemComponent = ({ name, component }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log(name);
    if (name === "Get Recipes") {
      navigate(`/ingredients`);
    } else {
      navigate(`/${name}`);
    }
  };
  return (
    <ListItem disablePadding onClick={handleClick}>
      <ListItemButton>
        <Stack direction="row" spacing={2}>
          {component}
          <ListItemText primary={name} />
        </Stack>
      </ListItemButton>
    </ListItem>
  );
};

export default ListItemComponent;
