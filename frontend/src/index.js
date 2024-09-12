import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login';
import Logout from './pages/Logout';
import UserProfile from './pages/UserProfile';
import { AuthProvider } from './components/AuthContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App></App>
    ),
    children: [
      {
        path: "my-profile",
        element: (
          <UserProfile></UserProfile>
        ),
      },
      {
        path: "/logout",
        element: (
          <Logout> </Logout>
        ),
      },
    ]
  },
  {
    path: "my-profile",
    element: (
      <UserProfile></UserProfile>
    ),
  },
  {
    path: "/login",
    element: (
      <Login> </Login>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);


reportWebVitals();
