import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import TrashCan from "../components/TrashCan";

const LandingPage = () => {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"space-between"}
      minHeight="100vh"
    >
      <Stack alignItems={"center"} justifyContent={"center"} mt={8}>
        <Typography
          sx={{
            fontSize: { xs: "300%", sm: "650%" },
            fontWeight: "bold",
            marginBottom: "0px",
            color: "#066b60",
            textDecoration: "underline",
          }}
        >
          WasteNot
        </Typography>
        <Typography
          sx={{
            fontSize: "1.2rem",
            textAlign: "center",
            fontWeight: "550",
            marginBottom: "6px",
          }}
        >
          Elevate Every Ingredient, Minimize Food Waste
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#bbd4ce",
            color: "#033015",
            margin: "8px",
            fontWeight: "bolder",
            "&:hover": {
              backgroundColor: "#679186",
              color: "white",
            },
          }}
        >
          Get Started
        </Button>
      </Stack>
      <Stack maxWidth="100%">
        <TrashCan />
      </Stack>
    </Stack>
  );
};

export default LandingPage;
