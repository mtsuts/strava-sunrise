import React, { useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../components/AppContext";

export default function Logout() {
  const {setIsLoading} = useContext(AppContext)

  useEffect(() => {
    localStorage.setItem("token", "");
    axios
      .get("http://localhost:3000/logout", { withCredentials: true })
      .then((response) => {
        window.location.href = "http://localhost:3001";
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="text-white p-5 text-center text-4xl">
      You are logged out
    </div>
  );
}