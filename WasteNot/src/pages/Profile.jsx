import { Stack, Avatar, Typography, TextField, Button } from "@mui/material";
import RecyclingIcon from "@mui/icons-material/Recycling";
import { useNavigate, useOutletContext } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import api from "../utilities.jsx";
import { useEffect, useState } from "react";

const Profile = () => {
  const navigate = useNavigate();
  const { user, setUser } = useOutletContext();

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [profilePic, setProfilePic] = useState("");

  const updateUser = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profile_picture", file);
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("email", email);
    try {
      const response = await api.put("user/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUser(response.data);
      console.log("updateUser", user);
      window.alert("Profile Successfully Updated");
      navigate("/profile");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user !== null) {
      setFirstName(user.first_name);
      setLastName(user.last_name);
      setEmail(user.email);
      setProfilePic(user.profile_picture);
    }
  }, [user]);

  const deactivateUser = async () => {
    try {
      const response = await api.put("user/status/", { is_active: "f" });
      console.log(response);
      setUser(null);
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
                position: "relative",
              }}
            >
              <Stack
                id="avatar-container"
                sx={{
                  pt: "22px",
                  position: "absolute",
                  left: 12,
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
                    height: { xs: "90px", sm: "150px" },
                    width: { xs: "90px", sm: "150px" },
                    border: "2px solid #90a4ae",
                    boxShadow: 2,
                  }}
                >
                  <Avatar
                    size="avatar-image"
                    sx={{
                      height: { xs: "80px", sm: "130px" },
                      width: { xs: "80px", sm: "130px" },
                    }}
                  >
                    <img
                      src={
                        profilePic ? profilePic : "src/assets/default_user.png"
                      }
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Avatar>
                </Stack>
              </Stack>
              <Typography
                component={"h2"}
                id="user-header"
                variant="h2"
                sx={{
                  position: "absolute",
                  right: 5,
                  color: "white",
                  fontWeight: "300",
                  fontSize: {
                    xs: "24px", // Extra small screens
                    sm: "36px", // Small screens
                  },
                }}
              >
                {user.first_name.charAt(0).toUpperCase() +
                  user.first_name.slice(1)}{" "}
                {user.last_name.charAt(0).toUpperCase() +
                  user.last_name.slice(1)}
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
                <Button
                  id="cancel-button"
                  variant="text"
                  onClick={() => navigate("/password-reset")}
                  sx={{
                    color: "#aa0000",
                    alignSelf: "flex-start",
                    marginLeft: "35px",
                    "&:hover": { borderRadius: "8px" },
                  }}
                >
                  Forgot Password?
                </Button>
                <Stack
                  id="buttons"
                  direction="row-reverse"
                  justifySelf="end"
                  gap={2}
                  sx={{
                    mt: 2,
                  }}
                >
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
                  <Button
                    variant="contained"
                    component="label" // Make it behave like a label for a file input
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
                    Change Photo
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                        const selectedImage = e.target.files[0];
                        if (selectedImage) {
                          setProfilePic(URL.createObjectURL(selectedImage)); // Set the temporary URL
                        }
                      }}
                      style={{ display: "none" }}
                    />
                  </Button>
                  <Button
                    id="cancel-button"
                    variant="text"
                    onClick={() => {
                      // window.location.reload(); // Refreshing the page to return to the original profile prior to changes since the changes were cancelled --> Is there a better way to do this?
                      navigate("/ingredients");
                    }}
                    sx={{
                      color: "#033015",
                      margin: "8px",
                      fontWeight: "bolder",
                      "&:hover": {
                        color: "gray",
                      },
                    }}
                  >
                    Cancel
                  </Button>
                </Stack>
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
};

export default Profile;
