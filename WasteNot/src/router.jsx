import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import InputPage from "./pages/InputPage";
import Profile from "./pages/Profile";
import Pantry from "./pages/Pantry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/ingredients",
        element: <InputPage />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/pantry",
        element: <Pantry />,
      },
    ],
  },
]);

export default router;
