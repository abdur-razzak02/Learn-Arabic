import { useEffect, useState } from "react";

const Date = () => {
  const [dates, setDates] = useState([]);
  useEffect(() => {
    fetch("dates.json")
      .then((res) => res.json())
      .then((data) => setDates(data));
  }, []);
  return (
    <div className="container mx-auto pt-5 pb-5 lg:pb-10 px-5 lg:px-0" id="dates">
      <h1 className="font-semibold text-2xl mb-4 pb-1 border-b-4 inline-block border-indigo-600">
        Date {dates.length}
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {dates.map((date) => (
          <div
            key={date.id}
            className="bg-white px-5 py-2 rounded-lg hover:border-b-4 border-indigo-600 transition duration-500"
          >
            Day: {date.date} <br />
            Arabic: {date.pronunciation} <br />
            English: {date.english_name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Date;
