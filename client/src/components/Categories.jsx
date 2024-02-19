import { TbBeach } from "react-icons/tb";
import { MdCabin } from "react-icons/md";
import { VscCoffee } from "react-icons/vsc";
import { TfiViewGrid } from "react-icons/tfi";
import { GiBowlingPin } from "react-icons/gi";
import { Category } from "./Category";
import { IoFlameOutline } from "react-icons/io5";
import { MdOutlineCastle } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { MdDownhillSkiing } from "react-icons/md";
import { GiIsland } from "react-icons/gi";
import { MdOutlineSurfing } from "react-icons/md";
import { GiCarKey } from "react-icons/gi";
import { IoBoatSharp } from "react-icons/io5";
import { GiGrandPiano } from "react-icons/gi";
import { GiDesert } from "react-icons/gi";
import { MdHouseboat } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";
import { MdGolfCourse } from "react-icons/md";
import { useState } from "react";

const categories = [
  {
    id: 1,
    icon: <TbBeach size={24} />,
    label: "Beachfront",
  },
  {
    id: 2,
    icon: <MdCabin size={24} />,
    label: "Cabins",
  },
  {
    id: 3,
    icon: <VscCoffee size={24} />,
    label: "Bed & Breakfast",
  },
  {
    id: 4,
    icon: <TfiViewGrid size={24} />,
    label: "Off the grid",
  },
  {
    id: 5,
    icon: <GiBowlingPin size={24} />,
    label: "Play",
  },
  {
    id: 6,
    icon: <IoFlameOutline size={24} />,
    label: "Trending",
  },
  {
    id: 7,
    icon: <MdOutlineCastle size={24} />,
    label: "Castle",
  },
  {
    id: 8,
    icon: <MdOutlinePool size={24} />,
    label: "Pool",
  },
  {
    id: 9,
    icon: <MdDownhillSkiing size={24} />,
    label: "Skiing",
  },
  {
    id: 10,
    icon: <MdOutlineSurfing size={24} />,
    label: "Surfing",
  },
  {
    id: 11,
    icon: <GiCarKey size={24} />,
    label: "New",
  },
  {
    id: 12,
    icon: <IoBoatSharp size={24} />,
    label: "Boats",
  },
  {
    id: 13,
    icon: <GiGrandPiano size={24} />,
    label: "Piano",
  },
  {
    id: 14,
    icon: <GiDesert size={24} />,
    label: "Desert",
  },
  {
    id: 15,
    icon: <MdHouseboat size={24} />,
    label: "HouseBoat",
  },
  {
    id: 16,
    icon: <GiIsland size={24} />,
    label: "Island",
  },
  {
    id: 17,
    icon: <FaUmbrellaBeach size={24} />,
    label: "Beach",
  },
  //   {
  //     id: 5,
  //     icon: <MdGolfCourse size={24} />,
  //     label: "Golfing",
  //   },
];

export const Categories = () => {
  return (
    <div className="flex gap-10 my-5 border-t py-6 justify-center">
      {categories.map((cat) => {
        return <Category key={cat.id} icon={cat.icon} label={cat.label} />;
      })}
    </div>
  );
};
