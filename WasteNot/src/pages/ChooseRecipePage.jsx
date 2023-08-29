import React from "react";
import { Container } from "@mui/material";
import useTheme from "@mui/material";
import Box from "@mui/material";
import MobileStepper from "@mui/material";
import Paper from "@mui/material";
import Typography from "@mui/material";
import Button from "@mui/material";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { KeyboardArrowRight } from "@mui/icons-material";
import RecipeCarousel from "../components/RecipeCardCarousel";

export default function ChooseRecipePage(){



    return (
        <Container>
            <RecipeCarousel />
        </Container>
    )
}