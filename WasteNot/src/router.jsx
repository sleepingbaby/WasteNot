import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import InputPage from "./pages/InputPage";
<<<<<<< HEAD
import Profile from "./pages/Profile";
=======
import Profile from "./components/Profile";
import ChooseRecipePage from "./pages/ChooseRecipePage";
>>>>>>> d0384c0 (basic carousel)


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
        path: "/recipes",
        element: <ChooseRecipePage />
      }
    ],
  },
]);

export default router;
