import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
export const CalendarModal = ({ price }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const [dataRange, setDataRange] = useState([new Date(), new Date()]);

  const formatDate = (date) => {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("/");
  };
  const dataCheckIn = formatDate(dataRange[0]);
  const dataCheckOut = formatDate(dataRange[1]);

  const onChange = (newValue) => {
    setDataRange(newValue);
    setShowCalendar(!showCalendar);
  };
  return (
    <div>
      <div className="">
        <p className="mb-5">
          <span className="text-xl font-semibold ">{price} lei </span>
          noapte
        </p>
        <div className=" grid grid-cols-2 border-slate-300 border rounded-lg">
          <div className="mt-16 absolute z-40 bg-white">
            {showCalendar && (
              <Calendar
                onChange={onChange}
                value={dataRange}
                selectRange
                minDate={new Date()}
              />
            )}
          </div>
          <div
            className="p-2 border-r border-slate-300"
            onClick={(e) => {
              setShowCalendar(!showCalendar);
            }}
          >
            <p className="text-xs font-bold">CHECK-IN</p>
            <p className="text-sm">{dataCheckIn}</p>
          </div>
          <div className="p-2 border-r border-slate-300">
            <p className="text-xs font-bold">CHECK-OUT</p>
            <p className="text-sm"> {dataCheckOut}</p>
          </div>

          <div className="p-2 col-start-1 col-end-3 border-t border-slate-300">
            <p className="text-xs font-bold">OASPETI</p>
            <select>
              <option value="adults">
                <div>
                  <div className=" flex-col"></div>
                </div>
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;
