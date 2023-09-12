import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";
import { MenuOutlined, AccountCircle } from "@mui/icons-material";
import TemporaryDrawer from "./Drawer";
import { api } from "../utilities.jsx";
import { recipeContext } from "../contexts/RecipeContext";

const Navbar = ({ user, setUser }) => {
  const { setIngredientList, setPantryList } = useContext(recipeContext);
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userChoice, setUserChoice] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    setAnchorEl(null);
    navigate("/profile");
  };

  const goHome = () => {
    navigate("/");
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const userAction = () => {
    setUserChoice(!userChoice);
  };
  const logOut = async () => {
    let response = await api.post("user/logout/");
    if (response.status === 204) {
      setUser(null);
      setIngredientList([]);
      setPantryList([]);
      navigate("/");
    } else {
      setAnchorEl(null);
      navigate("/login");
    }
  };

  useEffect(() => {
    if (user) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [user]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#0a1214",
          color: "#b8d4db",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction="row">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuOutlined />
            </IconButton>
            <TemporaryDrawer
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              user={user}
            />
          </Stack>
          <Stack
            width="250px"
            height="50px"
            backgroundColor="white"
            padding={3}
            alignItems="center"
            justifyContent="center"
            borderRadius="8px"
          >
            <img
              src="src/assets/wastenot.svg"
              width="100%"
              alt="Waste Not Image"
            />
          </Stack>

          {auth ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {user && user.profile_picture ? (
                  <Avatar src={user.profile_picture} />
                ) : (
                  <AccountCircle />
                )}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClick}>Profile</MenuItem>
                <MenuItem onClick={logOut}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <div onClick={userAction}>
              {userChoice ? (
                <Typography
                  variant="body1"
                  component="div"
                  onClick={() => navigate("/login")}
                  sx={{
                    color: "#b8d4db",
                    cursor: "pointer",
                  }}
                >
                  Log In
                </Typography>
              ) : (
                <Typography
                  variant="body1"
                  component="div"
                  onClick={() => navigate("/signup")}
                  sx={{
                    color: "#b8d4db",
                    marginRight: "20px",
                    cursor: "pointer",
                  }}
                >
                  Create Account
                </Typography>
              )}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
