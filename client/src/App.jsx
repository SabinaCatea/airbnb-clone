import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/Register";

import {
  UserContext,
  UserContextProvider,
} from "./context/UserContext/userContext";
import { useContext, useEffect } from "react";
import PlacePage from "./components/PlacePage";
import { Home } from "./components/Home";

function App() {
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (!user) {
      async () => {
        const response = await fetch("http://localhost:4000/profile", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",

          body: JSON.stringify({ test }),
        });
        // console.log("response", response);
      };
    }
  }, []);
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<PlacePage />}></Route>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
