import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import InputPage from "./pages/InputPage";
import Profile from "./pages/Profile";
import Pantry from "./pages/Pantry";
import ChooseRecipePage from "./pages/ChooseRecipePage";
import Loading from "./components/Loading";

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
      {
        path: "/recipes",
        element: <ChooseRecipePage />,
      },
      {
        path: "/loading",
        element: <Loading />,
      },
    ],
  },
]);

export default router;
