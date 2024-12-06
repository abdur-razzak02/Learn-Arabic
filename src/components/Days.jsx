import { useEffect, useState } from "react";

const Days = () => {
  const [days, setDays] = useState([]);
  useEffect(() => {
    fetch("Days.json")
      .then((res) => res.json())
      .then((data) => setDays(data));
  }, []);

  
  return (
    <div className="container mx-auto pt-5 pb-5 lg:pb-10 px-5 lg:px-0" id="days">
      <h1 className="font-semibold text-2xl mb-4 pb-1 border-b-4 inline-block border-indigo-600">
        Days {days.length}
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {days.map((day) => (
          <div
            key={day.id}
            className="bg-white px-5 py-2 rounded-lg hover:border-b-4 border-indigo-600 transition duration-500"
          >
            Day: {day.day} <br />
            Arabic: {day.pronunciation} <br />
            English: {day.english_name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Days;
