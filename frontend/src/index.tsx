import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import UserProfile from "./pages/UserProfile";
import { AppProvider } from "./components/AppContext";
import theme from "./utils/themes";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "@emotion/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "my-profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/logout",
        element: <Logout> </Logout>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login> </Login>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
