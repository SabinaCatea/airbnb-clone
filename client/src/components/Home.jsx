import { useEffect, useState } from "react";
import { Categories } from "./Categories";

export const Home = () => {
  const [places, setPlaces] = useState([{}]);
  console.log("places homee", places);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/home");
      console.log("response fetch data", response);
      const places = await response.json();
      setPlaces(places);
      console.log("places fetch data", places.data);
    };

    fetchData();
  }, []);
  return (
    <div>
      <Categories />
    </div>
  );
};
