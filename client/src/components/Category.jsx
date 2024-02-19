import { useState } from "react";

export const Category = ({ icon, label }) => {
  const [selected, isSelected] = useState(false);
  const handleSelectCategory = () => {
    console.log("clicked");

    console.log("label", label);
    isSelected(!selected);
  };

  return (
    <div
      className={`flex flex-col text-sm text-slate-500 hover:text-slate-700  ${
        selected && "text-slate-700 "
      } `}
      onClick={handleSelectCategory}
    >
      <div className=" self-center ">{icon}</div>
      <p
        className={` pb-5 hover:border-b-2 border-stone-300  ${
          selected && "border-b-2 border-stone-700"
        }
        `}
      >
        {label}
      </p>
    </div>
  );
};
