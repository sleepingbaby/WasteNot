import {
  Stack,
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Link,
} from "@mui/material";

const Contact = () => {
  const cards = [
    {
      name: "Ivan",
      fact: "I like spicy foods",
      github: "https://github.com/jayaruhbee",
      linkedin: "https://www.linkedin.com/in/jessica-paarfus",
      image: "src/assets/beef.png",
    },
    {
      name: "Jesse",
      fact: "I like broccoli",
      github: "https://github.com/jayaruhbee",
      linkedin: "https://www.linkedin.com/in/jessica-paarfus",
      image: "src/assets/beef.png",
    },
    {
      name: "Jessi",
      fact: "I'm also a Registered Dental Hygienist!",
      github: "https://github.com/jayaruhbee",
      linkedin: "https://www.linkedin.com/in/jessica-paarfus",
      image: "src/assets/Jessi-Headshot.png",
    },
    {
      name: "Josh",
      fact: "I like rain",
      github: "https://github.com/jayaruhbee",
      linkedin: "https://www.linkedin.com/in/jessica-paarfus",
      image: "src/assets/beef.png",
    },
    {
      name: "Kelvin",
      fact: "I have rock climbed my entire life but injure something every year.",
      github: "https://github.com/jayaruhbee",
      linkedin: "https://www.linkedin.com/in/jessica-paarfus",
      image: "src/assets/beef.png",
    },
    {
      name: "Mike",
      fact: "I like tv",
      github: "https://github.com/jayaruhbee",
      linkedin: "https://www.linkedin.com/in/jessica-paarfus",
      image: "src/assets/beef.png",
    },
    {
      name: "Pete",
      fact: "The New York Jets are going to win the Super Bowl this year",
      github: "https://github.com/pxolsen",
      linkedin: "https://www.linkedin.com/in/peter-olsen",
      image: "src/assets/Olsen_Headshot_1.jpeg",
    },
  ];

  return (
    <Stack
      id="mainpage"
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        id="engineers-container"
        sx={{
          height: { xs: "95%", sm: "95%" },
          width: { xs: "90%", sm: "90%" },
          backgroundColor: "#b8d4db",
          borderRadius: "8px",
          boxShadow: `0 0 20px rgba(210, 210, 210, 0.2),
            0 0 20px rgba(210, 210, 210, 0.2),
            0 0 20px rgba(210, 210, 210, 0.2)`,
          overflow: "scroll",
          "::-webkit-scrollbar": {
            width: "0",
            background: "transparent",
          },
        }}
      >
        <Box
          id="header-bg"
          sx={{
            bgcolor: "background.paper",
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            py:2,
          }}
        >
          <Container maxWidth="md">
            <Typography
              id="header"
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
            >
              Meet The Engineers
            </Typography>
          </Container>
        </Box>
        <Stack id="lower-container" justifyContent={"center"}>
          <Container sx={{ py: 8 }}>
            <Grid container spacing={3} justifyContent={"center"}>
              {cards.map((card, index) => (
                <Grid item key={index} xs={12} sm={6} md={3}>
                  <Card
                    sx={{
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow:
                        "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        pt: "56.25%", height:"300px"
                      }}
                      image={card.image}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        sx={{
                          pb: "5.25%",
                        }}
                      >
                        {card.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          marginBottom: "1px",
                          textDecoration: "underline",
                          pb: "2px",
                        }}
                      >
                        <span>Fun Fact:</span>
                      </Typography>
                      <Typography>{card.fact}</Typography>
                    </CardContent>
                    <CardActions
                      style={{
                        justifyContent: "center",
                        backgroundColor: "#1c2f32",
                      }}
                    >
                      <Link
                        href={card.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        style={{ color: "#b8d4db" }}
                      >
                        GitHub
                      </Link>
                      <Link
                        href={card.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        style={{ color: "#b8d4db" }}
                      >
                        LinkedIn
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Contact;
