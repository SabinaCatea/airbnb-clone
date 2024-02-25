import { Outlet, useParams } from "react-router-dom";
import Header from "./Header";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { randomNumber } from "../utils/randomNumber";

const placePage = () => {
  const { id } = useParams();
  const [place, setplace] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchplace = async () => {
      const response = await fetch(`http://localhost:4000/place/${id}`);
      const place = await response.json();
      setplace(place);
    };
    console.log("place", place);
    fetchplace();
  }, [id]);

  return (
    <div className=" overflow-hidden m-20 mx-60">
      <div className="grid gap-2  grid-cols-[2fr_1fr_1fr] ">
        <div>
          {place?.photos?.[0] && (
            <div>
              <img
                src={place?.photos?.[0]}
                alt=""
                className="aspect-square object-cover rounded-l-2xl"
              />
            </div>
          )}
        </div>
        <div className="grid">
          {place?.photos?.[1] && (
            <div>
              <img
                className=" aspect-square object-cover"
                src={place?.photos?.[1]}
                alt=""
              />
            </div>
          )}
          <div className=" overflow-hidden">
            {place?.photos?.[2] && (
              <img
                src={place?.photos?.[2]}
                alt=""
                className=" aspect-square object-cover relative top-2"
              />
            )}
          </div>
        </div>
        <div className="grid ">
          {place?.photos?.[3] && (
            <div>
              <img
                src={place?.photos?.[3]}
                alt=""
                className="aspect-square object-cover rounded-tr-2xl"
              />
            </div>
          )}
          <div className="  overflow-hidden">
            {place?.photos?.[4] && (
              <img
                src={place?.photos?.[4]}
                alt=""
                className=" aspect-square object-cover rounded-br-2xl relative top-2 "
              />
            )}
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className=" font-medium text-2xl pt-6">{place?.subtitle}</h1>
          <ul className="flex gap-2">
            <li>{place?.guests} guests</li>
            <li>{place?.bedrooms} bedroom</li>
            <li>{place?.beds} bed</li>
            <li>{place?.baths} baths</li>
          </ul>
          <div className="flex  font-semibold">
            <FaStar className="self-center mr-1" />
            <p className="mr-2">
              {randomNumber(1, 5)}.{randomNumber(10, 99)}
            </p>
            <p className="underline underline-offset-2 ">
              {" "}
              {randomNumber(1, 100)} reviews
            </p>
          </div>
        </div>
        <div>
          <div className="flex my-4 border-y-2 py-6">
            <img
              src={place?.photos?.[0]}
              alt=""
              className="w-12 rounded-full aspect-square"
            />
            <div className="mx-4">
              <p className="font-medium ">Hosted by Frederick Vincent</p>
              <p className="text-slate-500">
                {randomNumber(1, 5)} year hosting
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default placePage;
