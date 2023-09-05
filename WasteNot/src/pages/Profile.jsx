import { Stack, Avatar, Typography, TextField, Button } from "@mui/material";
import RecyclingIcon from "@mui/icons-material/Recycling";
import { useNavigate, useOutletContext } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
// import Toggle from "../components/TogglePassword";
import api from "../utilities.jsx";
import { useEffect, useState } from "react";

//* NEED TO FIX STATE ONLY REFLECTED ON REFRESH
export default function Profile() {
  const navigate = useNavigate();
  const { user } = useOutletContext();

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const updateUser = async () => {
    try {
      const response = await api.put("user/", {
        first_name,
        last_name,
        email,
      });
      window.alert("Profile Successfully Updated");
      navigate("/ingredients");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user !== null) {
      setFirstName(user.first_name);
      setLastName(user.last_name);
      setEmail(user.email);
    }
  }, [user]);

  const deactivateUser = async () => {
    try {
      const response = await api.put("user/status/", { is_active: "f" });
      console.log(response);
      window.alert("Account deactivated. We hope to see you again");
      navigate("/ingredients");
    } catch (error) {
      console.error(error);
    }
  };

  const confirmDelete = () => {
    confirmAlert({
      title: "Confirm account deactivation",
      message: "Are you sure you want to deactivate your account?",
      buttons: [
        {
          label: "Yes",
          onClick: deactivateUser,
        },
        {
          label: "No, take me back!",
        },
      ],
    });
  };
  return (
    <>
      {user && (
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
              boxShadow: `0 0 20px rgba(210, 210, 210, 0.2),
            0 0 20px rgba(210, 210, 210, 0.2),
            0 0 20px rgba(210, 210, 210, 0.2)`,
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
              ></Typography>
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
                  label=""
                  value={first_name}
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
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  variant="filled"
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
                  value={email}
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
                  onClick={updateUser}
                  // *NAVIGATE BACK TO HOME AFTER JS ADDED
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
                  Save Changes
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
            <RecyclingIcon sx={{ fontSize: 34, color: "gray" }} />
            <Button
              id="delete-button"
              variant="text"
              onClick={() => {
                confirmDelete();
              }}
              sx={{
                color: "#FFFFFF",
                "&:hover": {
                  color: "red",
                },
              }}
            >
              Deactivate Account
            </Button>
          </Stack>
        </Stack>
      )}
    </>
  );
}
