import { Stack, Avatar, Typography, TextField, Button } from "@mui/material";
import RecyclingIcon from "@mui/icons-material/Recycling";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { useOutletContext } from "react-router-dom";
import { api } from "../utilities.jsx";
import { useState } from "react";

export default function SignupPage() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useOutletContext();
    const navigate = useNavigate();

    const signUp = async(e) => {
        e.preventDefault();
        let response = await api.post("user/signup/", {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password
        })
        .catch((err)=>{
            alert("Something went wrong")
        })
        let user = response.data.user;
        setUser(user);
        console.log(user)
        navigate("/") // Testing to see if it will nav to a new page
    }

    
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
                <Stack
                  id="avatar-backdrop"
                  justifyContent="center"
                  alignItems="center"
                  mt={{ xs: 0, sm: 10 }}
                  sx={{
                    borderRadius: "50%",
                    backgroundColor: "white",
                    height: { xs: "50px", sm: "120px" },
                    width: { xs: "50px", sm: "120px" },
                    border: "2px solid #90a4ae",
                    boxShadow: 2,
                  }}
                >
                  <Avatar
                    size=""
                    sx={{
                      height: { xs: "40px", sm: "100px" },
                      width: { xs: "40px", sm: "100px" },
                    }}
                  ></Avatar>
                </Stack>
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
                  <TextField
                    variant="filled"
                    label="Password"
                    onChange={(e) => setPassword(e.target.value)}
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
                    onClick={() => navigate("/ingredients")}
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
            >
            </Stack>
          </Stack>
        </>
      );
}