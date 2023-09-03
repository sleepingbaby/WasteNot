import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import InputPage from "./pages/InputPage";
import Profile from "./pages/Profile";
import Pantry from "./pages/Pantry";
import ChooseRecipePage from "./pages/ChooseRecipePage";
import LoginPage from "./pages/LoginPage";
import { Login } from "@mui/icons-material";
import ChatBotComponent from "./components/ChatBotComponent";
import SignupPage from "./pages/SignupPage";
import PasswordReset from "./pages/PasswordReset";
import PasswordResetConfirm from "./pages/PasswordResetConfirm";


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
        path: "/password-reset",
        element: <PasswordReset />,
      },
      {
        path: "/password-reset-confirm/:id/:token",
        element: <PasswordResetConfirm />,
      },
      {
        path: "/chat",
        element: <ChatBotComponent />,
      },

      // {
      //   path: "/loading",
      //   element: <Loading />,
      // },
    ],
  },
]);

export default router;
