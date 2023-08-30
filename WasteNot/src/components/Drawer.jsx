import React, { useState } from "react"; // Import useState
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  Fastfood,
  Kitchen,
  MenuBook,
  Favorite,
  AccountBox,
  ContactPage,
  Info,
} from "@mui/icons-material";
import ListItemComponent from "./ListItemComponent";

function TemporaryDrawer({ open, onClose }) {
  const navbarItemsTop = [
    { name: "Get Recipes", component: <Fastfood /> },
    { name: "Pantry", component: <Kitchen /> },
    { name: "Recipes", component: <MenuBook /> },
    { name: "Favorites", component: <Favorite /> },
  ];
  const navbarItemsBottom = [
    { name: "Profile", component: <AccountBox /> },
    { name: "About", component: <Info /> },
    { name: "Contact", component: <ContactPage /> },
  ];

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "#b8d4db",
      }} // Correct the "aut" to "auto"
      role="presentation"
      onClick={onClose} // Use the onClose prop to close the drawer
      onKeyDown={onClose} // Use the onClose prop to close the drawer
    >
      <List>
        {navbarItemsTop.map((item) => (
          <ListItemComponent
            key={item.name}
            name={item.name}
            component={item.component}
          />
        ))}
      </List>
      <Divider />
      <List>
        {navbarItemsBottom.map((item) => (
          <ListItemComponent
            key={item.name}
            name={item.name}
            component={item.component}
          />
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{ "& .MuiDrawer-paper": { backgroundColor: "#b8d4db" } }}
    >
      {list("left")}
    </Drawer>
  );
}

export default TemporaryDrawer;
