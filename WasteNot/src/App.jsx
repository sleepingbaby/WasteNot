import { Stack } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState, useEffect, useRef } from "react";
import { api } from "./utilities.jsx";
import { RecipeContextProvider } from "./contexts/RecipeContext";

function App() {
  const location = useLocation();
  const path = location.pathname;
  const lastVisited = useRef();

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const whoAmI = async () => {
    const response = await api.get("user/");
    console.log("response.data", response.data)
    if (response.data) {
      setUser(response.data);
      if (lastVisited.current) {
        navigate(lastVisited.current);
      } else {
        navigate("/");
      }
    }
  };

  useEffect(() => {
    console.log("user in whoam i", user)
    whoAmI();
  }, []);

  useEffect(() => {
    lastVisited.current = location.pathname;
  }, [location]);

  return (
    <RecipeContextProvider>
      <Stack height="100%" sx={{ backgroundColor: "#0a1214" }}>
        {path !== "/" && <Navbar user={user} setUser={setUser} />}

        <Outlet context={{ user, setUser }} />
      </Stack>
    </RecipeContextProvider>
  );
}

export default App;
