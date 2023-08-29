import React from "react";
import { Container } from "@mui/material";
import Typography from "@mui/material";

export default function RecipeCard({ data }) {
    return (
        <Container>
            <Typography>{data.title}</Typography>
            <Typography>{data.description}</Typography>
        </Container>
    );
}
  