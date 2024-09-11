import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App></App>
    ),
    children: [
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
    <RouterProvider router={router} />
  </React.StrictMode>
);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


reportWebVitals();
