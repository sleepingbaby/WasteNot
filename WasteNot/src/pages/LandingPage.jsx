import { Button, Stack, Typography } from "@mui/material";
import React from "react";

const LandingPage = () => {
  return (
    <Stack alignItems={"center"} justifyContent={"center"} minHeight="100vh">
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Typography
          sx={{
            fontSize: { xs: "300%", sm: "650%" },
            fontWeight: "bold",
            color: "#066b60",
            textDecoration: "underline",
          }}
        >
          WasteNot
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#bbd4ce",
            color: "#033015",
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
    </Stack>
  );
};

export default LandingPage;
