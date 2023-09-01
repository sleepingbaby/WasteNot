import { Paper } from "@mui/material";

export default function CustomPaper({ children }) {
  return (
    <Paper
      sx={{
        textTransform: "capitalize",
      }}
    >
      {children}
    </Paper>
  );
}
