import React from "react";
import Typography from "@mui/material/Typography";
import { Paper, Box, Stack } from "@mui/material";
import '../styles/Font.css';
import { BorderAllRounded, BorderStyleRounded } from "@mui/icons-material";

export default function RecipeCard({ data }) {

    return (

        <Box>

            <Paper elevation={24} sx={{

                width: {
                    xs: '80vw',
                    sm: '20vw',
                    md: '20vw',
                    lg: '15vw'
                },

                height: {
                    xs: '500px',
                    sm: '30vw',
                    md: '25vw'
                },

                padding: {
                    xs: '2vw',
                    sm: '1vw'
                },
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#78CCB6',
                border: 6,
                borderColor: '#68A2B1'
                
            }}>

                <Stack sx={{
                    height: '100%',
                    width: '100%',
                    textAlign: 'center'
                }}>
                    <Stack sx={{
                        height: '40%',
                        width: '100%',
                        backgroundImage: `url(${data.image})`,
                        backgroundSize: 'cover',
                        boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;'
                    }} style={{ borderRadius: '3%' }}>
                    </Stack>
                    <Typography sx={{
                        fontSize: {
                            xs: '3vw',
                            sm: '1.5vw',
                            md: '1vw',
                        },
                        borderTop: 1,
                        borderBottom: 1,
                        marginTop: '1vh'
                    }}>
                        {data.title}
                    </Typography>

                    <Typography>{data.descriptions}</Typography>

                </Stack>
                {/* <Stack sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    height: '100%',
                    width: '100%'
                }}>

                    <Stack spacing={8} sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>

                        <Stack sx={{
                            maxHeight: '15%'
                        }}>
                            <Typography sx={{
                                fontSize: {
                                    xs: '3vw',
                                    sm: '1.5vw',
                                    md: '1vw',
                                }
                            }}>
                                {data.title}
                            </Typography>

                            <Typography>{data.descriptions}</Typography>
                        </Stack>

                        <Stack sx={{
                            height: '85%',
                            width: '85%',
                        }}>

                            <img src={data.image} style={{ objectFit: 'cover', borderRadius: '8%' }}  />
                        </Stack>
                    </Stack>
                </Stack> */}
            </Paper>
        </Box>
    );
}
