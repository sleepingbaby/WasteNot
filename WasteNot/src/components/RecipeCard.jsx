import React from "react";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";

export default function RecipeCard({ data }) {
    return (
        <div>
            <Paper>
                <Typography>{data.title}</Typography>
                <Typography>{data.description}</Typography>
            </Paper>
        </div>
    );
}
