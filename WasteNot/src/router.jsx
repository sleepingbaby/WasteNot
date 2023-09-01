import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import InputPage from "./pages/InputPage";
import Profile from "./pages/Profile";
import Pantry from "./pages/Pantry";
import ChooseRecipePage from "./pages/ChooseRecipePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { Login } from "@mui/icons-material";
import ChatBotComponent from "./components/ChatBotComponent";

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
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
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
        path: "/chat",
        element: <ChatBotComponent />,
      },
    ],
  },
]);

export default router;
