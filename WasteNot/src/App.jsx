import LandingPage from "./pages/LandingPage";
import { Stack } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <Stack height="100%" sx={{ backgroundColor: "#f5fef9" }}>
      {path !== "/" && <Navbar />}
      <Outlet />
    </Stack>
  );
}

export default App;
