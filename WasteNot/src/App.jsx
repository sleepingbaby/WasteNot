import { Stack } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { RecipeContextProvider } from "./contexts/RecipeContext";

function App() {

  const location = useLocation();
  const path = location.pathname;
  
  return (
    <RecipeContextProvider>
      <Stack height="100%" sx={{ backgroundColor: "#0a1214" }}>
        {path !== "/" && <Navbar />}
        <Outlet />
      </Stack>
    </RecipeContextProvider>
  );
}

export default App;
