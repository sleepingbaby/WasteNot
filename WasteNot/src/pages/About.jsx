import {
  Stack,
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const About = () => {
  return (
    <Stack
      id="mainpage"
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        id="about-container"
        sx={{
          height: { xs: "95%", sm: "95%" },
          width: { xs: "90%", sm: "90%" },
          backgroundColor: "#b8d4db",
          borderRadius: "18px",
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
            borderTopRightRadius: "18px",
            borderTopLeftRadius: "18px",
            pt: 2,
            pb: 1,
          }}
        >
          <Container maxWidth="md">
            <Typography
              id="header"
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              About WasteNot
            </Typography>
          </Container>
        </Box>
        <Stack id="lower-container" justifyContent={"center"}>
          <Container sx={{ py: 8 }}>
              <Grid item xs={12} sm={6}>
                <Card>
                  {/* Video */}
                  <CardContent align="center">
                    <iframe
                      width="540"
                      height="315"
                      src="https://www.youtube.com/embed/uTaFYF1nA4c?si=5paH5K-DPW2qIc3N&amp;start=54"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </CardContent>
                  {/* Information */}
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="div"
                      gutterBottom
                      justifyContent={"center"}
                    >
                      Food Waste and Food Rescue
                    </Typography>
                    <Typography variant="body1" paragraph>
                      When we stop food waste, we take a big step toward ending
                      hunger. America has more than enough food for everyone to
                      eat. But each year, billions of pounds of perfectly good
                      food go to waste. Meanwhile,
                      <strong> 34 million face hunger</strong> in the United
                      States. As the country's largest food rescue organization,
                      Feeding America partners with food manufacturers, grocery
                      stores, restaurants, and farmers to rescue food and
                      deliver it to food banks serving our neighbors.
                    </Typography>
                    <Typography
                      variant="h5"
                      component="div"
                      gutterBottom
                      justifyContent={"center"}
                    >
                      What is food waste?
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Food waste is safe, high-quality food that is thrown away
                      rather than eaten. Food waste occurs for a variety of
                      reasons, including: uneaten food that is thrown out at
                      homes, stores, and restaurants, crops left in fields
                      because of low crop prices or too many of the same crops
                      being available, problems during the manufacturing and
                      transportation of food, and food not meeting retailers'
                      standards for color and appearance
                    </Typography>
                    <Typography
                      variant="h5"
                      component="div"
                      gutterBottom
                      justifyContent={"center"}
                    >
                      How much food waste is there in the United States?
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Each year, <strong>119 billion pounds</strong> of food is wasted in the
                      United States. That equates to <strong>130 billion</strong> meals and more
                      than <strong>$408 billion</strong> in food thrown away each year.
                      Shockingly, <strong>nearly 40% of all food in America is wasted</strong>.
                      Food goes to waste at every stage of food production and
                      distribution - from farmers to packers and shippers, from
                      manufacturers to retailers to our homes. Food waste in our
                      homes makes up about 39% of all food waste - about 42
                      billion pounds of food waste. While commercial food waste
                      makes up about 61% of all food waste or 66 billion pounds
                      of food waste. Feeding America focuses on reducing food
                      waste on farms and in food service, manufacturing, and
                      retail.
                    </Typography>
                    <Typography
                      variant="h5"
                      component="div"
                      gutterBottom
                      justifyContent={"center"}
                    >
                      What can we do?
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Let's start by eating the food that's in our pantry and frigerator. Use our inovative ingredient search feature to utilize the food you have on hand to create new and delicous meals. Save those recipes into you favorites list and even keep track of what you have in stock!
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          </Container>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default About;
