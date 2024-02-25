import { Route, Routes } from "react-router-dom";
import { useState } from "react";
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
  const [places, setPlaces] = useState([{}]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/");
      const places = await response.json();
      setPlaces(places);
    };
    fetchData();
  }, []);
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
      };
    }
  }, []);

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home places={places} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/place/:id" element={<PlacePage />}></Route>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
