import { TbBeach } from "react-icons/tb";
import { VscCoffee } from "react-icons/vsc";
import { TfiViewGrid } from "react-icons/tfi";

import { IoFlameOutline, IoBoatSharp } from "react-icons/io5";
import {
  MdOutlineCastle,
  MdOutlinePool,
  MdDownhillSkiing,
  MdOutlineSurfing,
  MdHouseboat,
  MdCabin,
  MdGolfCourse,
} from "react-icons/md";

import {
  GiIsland,
  GiCarKey,
  GiGrandPiano,
  GiDesert,
  GiBowlingPin,
} from "react-icons/gi";
import { FaUmbrellaBeach } from "react-icons/fa";
import { FaTents } from "react-icons/fa6";
import { Category } from "./Category";
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
  {
    id: 18,
    icon: <MdGolfCourse size={24} />,
    label: "Golfing",
  },
  {
    id: 19,
    icon: <FaTents size={24} />,
    label: "Tent",
  },
];

export const Categories = () => {
  return (
    <div className="flex gap-8 my-5 border-t py-6 justify-center overflow-hidden">
      {categories.map((cat) => {
        return <Category key={cat.id} icon={cat.icon} label={cat.label} />;
      })}
    </div>
  );
};
