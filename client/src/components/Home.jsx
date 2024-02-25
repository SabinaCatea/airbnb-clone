// import { Carousel } from "@material-tailwind/react";

import { Categories } from "./Categories";
import { Places } from "./Places";

export const Home = ({ places }) => {
  return (
    <div className="box-border">
      <Categories />
      <Places places={places} />
    </div>
  );
};
