import { Stack, Typography, TextField, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import api from "../utilities.jsx";

import { useState } from "react";

export default function PasswordResetConfirm() {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();

  const resetPassword = async (e) => {
    e.preventDefault();
    if (password && password === password2) {
      let response = await api
        .post("user/password_reset/confirm/", {
          password: password,
          token: token,
        })
        .catch((err) => {
          alert(err.response.data.password);
        });
      if (response.status === 200) {
        alert("password reset", response);
        navigate("/login");
      }
    } else {
      alert("Passwords do not match");
    }
  };

  const handleChange = (e) => {
    setPassword(e);
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
            height: { xs: "50%", sm: "50%" },
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
              Password Reset
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
              Enter a new password
              <TextField
                variant="filled"
                label="Password"
                type="password"
                onChange={(e) => handleChange(e.target.value)}
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
            </Stack>
            <Stack
              id="profile-data-fields"
              gap={4}
              alignItems="center"
              justifyContent="center"
              height="100%"
              width="100%"
            >
              Re-Enter Password
              <TextField
                variant="filled"
                label="Password"
                type="password"
                onChange={(e) => setPassword2(e.target.value)}
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
                Cancel
              </Button>
              <Button
                id="save-button"
                variant="contained"
                onClick={(e) => resetPassword(e)}
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
                Reset Password
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
