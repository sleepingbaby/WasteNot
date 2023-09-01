import { Stack } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { RecipeContextProvider } from "./contexts/RecipeContext";


function App() {

  const location = useLocation();
  const path = location.pathname;


  const [user, setUser] = useState(null)

  
  return (
    <RecipeContextProvider>
      <Stack height="100%" sx={{ backgroundColor: "#0a1214" }}>
        {path !== "/" && <Navbar />}
        <Outlet context={{ setUser }}/>
      </Stack>
    </RecipeContextProvider>

  );
}

export default App;
