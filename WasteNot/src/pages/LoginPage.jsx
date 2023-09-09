import { Stack, Typography, TextField, Button } from "@mui/material";
import { useNavigate, useOutletContext} from "react-router-dom";
import api from "../utilities.jsx";
import Toggle from "../components/TogglePassword.jsx";


import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useOutletContext();
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const logIn = async (e) => {
    e.preventDefault();
    let response = await api
      .post("user/login/", {
        email: email,
        password: password,
      })
      .catch((err) => {
        alert("Something went wrong");
      });
    let user = response.data.user;
    setUser(user);
    setPassword("");
    console.log(user);
    navigate("/");
    navigate("/ingredients", { replace: true });
  };

  return (
    <>
      <Stack
        id="mainpage"
        height="100%"
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          id="profile-container"
          sx={{
            height: { xs: "90%", sm: "90%" },
            width: { xs: "90%", sm: "50%" },
            backgroundColor: "#b8d4db",
            borderTopRightRadius: "18px",
            borderTopLeftRadius: "18px",
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "15px",
          }}
        >
          <Stack
            id="header-container"
            height="18%"
            direction="row"
            alignItems="center"
            justifyContent="space-around"
            sx={{
              backgroundColor: "#1a2e32",
              borderTopRightRadius: "15px",
              borderTopLeftRadius: "15px",
              borderColor: "#006064",
            }}
          >
       
          
            <Typography
              component={"h2"}
              id="user-header"
              variant="h2"
              sx={{
                color: "white",
                fontWeight: "300",
                fontSize: {
                  xs: "28px", // Extra small screens
                  sm: "36px", // Small screens
                  md: "48px", // Medium screens
                  lg: "64px", // Large screens
                },
              }}
            >
              Log In
            </Typography>
          </Stack>
          <Stack
            id="profile-container"
            height="100%"
            width="100%"
            justifyContent="center"
            alignItems="center"
            mt={8}
          >
            <Stack
              id="profile-data-fields"
              gap={4}
              alignItems="center"
              justifyContent="center"
              height="100%"
              width="100%"
            >
              <TextField
                variant="filled"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  width: "90%",
                  backgroundColor: "white",
                  input: { color: "#1a2e32" },
                  borderRadius: "6px",
                  "& label.Mui-focused": { color: "#1a2e32" },
                  "& label.MuiInputLabel-root": { color: "#1a2e32" },
                  "& .MuiFilledInput-underline:after": {
                    borderBottom: "none",
                  },
                  "& .MuiInputBase-root:hover:not(.Mui-disabled):before": {
                    borderBottom: "none",
                  },
                  "& .MuiFilledInput-root:before": {
                    borderBottom: "none",
                  },
                }}
              ></TextField>
              <Toggle
                label="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <Button
                id="cancel-button"
                variant="text"
                onClick={() => navigate("/password-reset")}
                sx={{
                  color: "#aa0000",
                  alignSelf: "flex-start",
                  marginLeft: "45px",
                  "&:hover": { borderRadius: "8px" },
                }}
              >
                Forgot Password?
              </Button>
            </Stack>
            <Stack
              id="buttons"
              direction="row"
              justifySelf="end"
              gap={4}
              sx={{
                mb: 2,
              }}
            >
              <Button
                id="cancel-button"
                variant="text"
                onClick={() => navigate("/signup")}
                sx={{
                  color: "#000000",
                  "&:hover": { borderRadius: "8px" },
                }}
              >
                Need an account?
              </Button>
              <Button
                id="save-button"
                variant="contained"
                onClick={(e) => logIn(e)}
                sx={{
                  backgroundColor: "#68a2b1",
                  color: "#033015",
                  margin: "8px",
                  fontWeight: "bolder",
                  "&:hover": {
                    backgroundColor: "#1a2e32",
                    color: "white",
                  },
                }}
              >
                Log In
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            mt: 2,
          }}
        ></Stack>
      </Stack>
    </>
  );
}
