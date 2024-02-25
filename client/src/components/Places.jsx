import { Link } from "react-router-dom";
export const Places = ({ places }) => {
  return (
    <div className="mx-20 grid gap-4  xl:grid-cols-4 lg:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-y-5 justify-center content-center justify-items-center">
      {places.length > 0 &&
        places.map((place) => {
          return (
            <Link to={`/place/${place?._id}`} key={place?._id}>
              <div>
                <img
                  src={place?.photos?.[0]}
                  alt="placePhoto"
                  className=" aspect-square object-cover rounded-xl"
                />
              </div>

              <p className="font-semibold">{place?.title}</p>
              <p className="text-slate-500">Gazda profesionista</p>
              <p>
                <span className="font-semibold">{place?.price} lei </span>
                noapte
              </p>
            </Link>
          );
        })}
    </div>
  );
};
