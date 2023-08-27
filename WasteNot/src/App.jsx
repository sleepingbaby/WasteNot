import LandingPage from "./pages/LandingPage";
import { Box } from "@mui/material";
import Carrot from "./components/Carrot";
import Spinach from "./components/Spinach";
import Money from "./components/Money";
import Money2 from "./components/Money2";

function App() {
  return (
    <Box minHeight="100vh">
      <Money2 />
      <Carrot />
      <Spinach />
      <Money />
      <LandingPage />
    </Box>
  );
}

export default App;
