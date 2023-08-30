import { Stack, Avatar, Typography, TextField, Button } from "@mui/material";
import RecyclingIcon from "@mui/icons-material/Recycling";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function Profile() {
  // * NEED REQUESTS, UPDATE ALERT RESPONSES, NAVIGATION AFTER DEACTIVATION

  const confirmDelete = () => {
    confirmAlert({
      title: "Confirm account deactivation",
      message: "Are you sure you want to deactivate your account?",
      buttons: [
        {
          label: "Yes",
          onClick: () => alert("Account deactivated. We hope to see you again"),
        },
        {
          label: "No, take me back!",
        },
      ],
    });
  };

  const navigate = useNavigate();

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
            height: { xs: "90%", sm: "70%" },
            width: { xs: "70%", sm: "50%" },
            backgroundColor: "#eeeeee",
            borderTopRightRadius: "18px",
            borderTopLeftRadius: "18px",
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "15px",
            boxShadow: `
0 0 20px rgba(210, 210, 210, 0.2),
0 0 20px rgba(210, 210, 210, 0.2),
0 0 20px rgba(210, 210, 210, 0.2)
`,
          }}
        >
          <Stack
            id="header-container"
            height="18%"
            direction="row"
            alignItems="center"
            justifyContent="space-around"
            sx={{
              backgroundColor: "#006064",
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
              User's Name
            </Typography>
          </Stack>
          <Stack
            id="profile-container"
            height="100%"
            width="100%"
            justifyContent="center"
            alignItems="center"
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
                sx={{ width: "90%" }}
              ></TextField>
              <TextField
                variant="filled"
                label="Last Name"
                sx={{ width: "90%" }}
              ></TextField>
              <TextField
                variant="filled"
                label="Email"
                sx={{ width: "90%", borderRadius: "15px" }}
              ></TextField>
              <TextField
                variant="filled"
                label="Password"
                sx={{ width: "90%" }}
              ></TextField>
            </Stack>
            <Stack
              id="buttons"
              direction="row"
              justifySelf="end"
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
                }}
              >
                Cancel
              </Button>
              <Button
                id="save-button"
                variant="contained"
                onClick={() => {
                  alert("Profile Successfully Updated");
                }}
                // *NAVIGATE BACK TO HOME AFTER JS ADDED
                sx={{
                  backgroundColor: "#0097a7",
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
            variant="filled"
            onClick={() => {
              confirmDelete();
            }}
            sx={{
              color: "#ef5350",
              fontSize: 14,
              ":hover": {
                color: "white",
              },
              // fontWeight:"300"
            }}
          >
            Delete Account
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
