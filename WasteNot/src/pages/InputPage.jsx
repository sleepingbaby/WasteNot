import {
  Stack,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  Button,
  Box,
} from "@mui/material";

const InputPage = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        backgroundColor="#b8d4db"
        height="90%"
        width="90%"
        borderRadius="8px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ boxShadow: 7 }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          mb={2}
          width="80%"
        >
          <TextField
            id="filled-basic"
            label="Ingredients"
            variant="filled"
            sx={{
              width: "90%",
              backgroundColor: "#1a2e32",
              borderRadius: "6px",
              "& label.Mui-focused": { color: "white" },
              "& label.MuiInputLabel-root": { color: "white" },
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
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#68a2b1",
              height: "100%",
              width: "10%",
              color: "#033015",
              margin: "8px",
              fontWeight: "bolder",
              "&:hover": {
                backgroundColor: "#1a2e32",
                color: "white",
              },
            }}
          >
            Add
          </Button>
        </Stack>

        <Stack
          height="70%"
          width="80%"
          sx={{
            backgroundColor: "#1a2e32",
            borderRadius: "6px",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          }}
        ></Stack>
        <FormGroup
          sx={{ display: "flex", flexDirection: "row", padding: "8px" }}
        >
          <FormControlLabel
            control={<Checkbox sx={{ color: "black" }} />}
            label="Vegan"
            sx={{ color: "black" }}
          />
          <FormControlLabel
            control={<Checkbox sx={{ color: "black" }} />}
            label="Vegetarian"
            sx={{ color: "black" }}
          />
          <FormControlLabel
            control={<Checkbox sx={{ color: "black" }} />}
            label="Nut-Free"
            sx={{ color: "black" }}
          />
          <FormControlLabel
            control={<Checkbox sx={{ color: "black" }} />}
            label="Dairy-Free"
            sx={{ color: "black" }}
          />
        </FormGroup>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#68a2b1",
            width: "10%",
            color: "#033015",
            margin: "8px",
            fontWeight: "bolder",
            "&:hover": {
              backgroundColor: "#1a2e32",
              color: "white",
            },
          }}
        >
          Get Recipes
        </Button>
      </Box>
    </Stack>
  );
};

export default InputPage;
