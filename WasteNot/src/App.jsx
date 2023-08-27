import LandingPage from "./pages/LandingPage";
import { Box } from "@mui/material";
import Carrot from "./components/Carrot";
import Spinach from "./components/Spinach";
import Money from "./components/Money";
import Money2 from "./components/Money2";
import Meat from "./components/Meat";

function App() {
  return (
    <Box minHeight="100vh">
      <Meat />
      <Carrot />
      <Spinach />
      <Money />
      <LandingPage />
    </Box>
  );
}

export default App;
