import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import InputPage from "./pages/InputPage";
import Profile from "./pages/Profile";
import Pantry from "./pages/Pantry";
import ChooseRecipePage from "./pages/ChooseRecipePage";
import LoginPage from "./pages/LoginPage";
import ChatBotComponent from "./components/ChatBotComponent";
import SignupPage from "./pages/SignupPage";
import PasswordReset from "./pages/PasswordReset";
import RecipesStrict from "./pages/RecipesStrict";
import PasswordResetConfirm from "./pages/PasswordResetConfirm";
import Contact from "./pages/Contact";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import FullRecipe from "./components/FullRecipe";

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
      {
        path: "/strict_recipes",
        element: <RecipesStrict />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/details/:recipeId",
        element: <FullRecipe />,
      },

      // {
      //   path: "/loading",
      //   element: <Loading />,
      // },
    ],
  },
]);

export default router;
