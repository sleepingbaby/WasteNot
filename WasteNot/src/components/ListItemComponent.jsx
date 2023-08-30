import { ListItem, ListItemButton, ListItemText, Stack } from "@mui/material";

const ListItemComponent = ({ name, component }) => {
  return (
    <ListItem disablePadding>
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
