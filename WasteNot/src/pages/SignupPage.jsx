import { Stack, Avatar, Typography, TextField, Button } from "@mui/material";
import RecyclingIcon from "@mui/icons-material/Recycling";
import { useNavigate, useOutletContext } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import api from "../utilities.jsx";
import Toggle from "../components/TogglePassword.jsx";

import { useState } from "react";

export default function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("")
  const { setUser } = useOutletContext();
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordChange2 = (e) => {
    setPassword2(e.target.value);
  };

  const signUp = async (e) => {
    e.preventDefault();
    if (password == password2) {
    let response = await api
      .post("user/signup/", {
        first_name: firstName,
        last_name: lastName,
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
    navigate("/login");
    } else {
      alert("Passwords do not match.")
    }
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
              Sign Up
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
                label="First Name"
                onChange={(e) => setFirstName(e.target.value)}
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
              <TextField
                variant="filled"
                label="Last Name"
                onChange={(e) => setLastName(e.target.value)}
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
              <Toggle
                label="Confirm Password"
                value={password2}
                onChange={handlePasswordChange2}
              />
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
                onClick={() => navigate("/login")}
                sx={{
                  color: "#000000",
                  "&:hover": { borderRadius: "8px" },
                }}
              >
                Already have an account?
              </Button>
              <Button
                id="save-button"
                variant="contained"
                onClick={(e) => signUp(e)}
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
                Sign Up
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
