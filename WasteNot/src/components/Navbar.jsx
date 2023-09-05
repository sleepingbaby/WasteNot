import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { MenuOutlined, AccountCircle } from "@mui/icons-material";
import TemporaryDrawer from "./Drawer";
import { api } from "../utilities.jsx";

const Navbar = ({ user, setUser }) => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    setAnchorEl(null);
    navigate("/profile");
  };

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const goHome = () => {
    navigate("/");
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = async () => {
    let response = await api.post("user/logout/");
    if (response.status === 204) {
      setUser(null);

      navigate("/");
    }
  };

      setAnchorEl(null);
      navigate("/login");
    }
  };
  console.log("user in navbar", user);

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
        <Toolbar>
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
          />
          <Typography
            variant="h6"
            component="div"
            onClick={goHome}
            sx={{
              fontWeight: "bold",
              color: "#b8d4db",
              flexGrow: 1,
              "&:hover": { cursor: "pointer" },
            }}
          >
            WasteNot
          </Typography>
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
                <AccountCircle />
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

                <MenuItem onClick={handleClose}>Logout</MenuItem>

                <MenuItem onClick={logOut}>Logout</MenuItem>

              </Menu>
            </div>
          ) : (
            <div>
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
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
