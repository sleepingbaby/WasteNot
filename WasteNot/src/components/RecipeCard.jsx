import React from "react";
import Typography from "@mui/material/Typography";
import { Paper, Box, Stack } from "@mui/material";

export default function RecipeCard({ data }) {
    return (
        <Box>
            <Paper sx={{
                width: '250px',
                height: '350px',
                p: '2',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#68A2B1',
                boxShadow: 'box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;'
            }}>
                <Stack sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                }}>
                    <Typography>{data.title}</Typography>
                    <Typography>{data.descriptions}</Typography>
                    <Stack sx={{
                        height: '70%',
                        width: '70%',
                    }}>
                        <img src={data.image} style={{ objectFit: 'cover' }} />
                    </Stack>
                </Stack>
            </Paper>
        </Box>
    );
}
