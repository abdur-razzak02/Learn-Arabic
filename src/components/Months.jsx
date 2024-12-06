import { useEffect, useState } from "react";

const Months = () => {
  const [months, setMonths] = useState([]);
  useEffect(() => {
    fetch("months.json")
      .then((res) => res.json())
      .then((data) => setMonths(data));
  }, []);
  return (
    <div className="container mx-auto pb-5 lg:pb-10 px-5 lg:px-0" id="months">
          <h1 className="font-semibold text-2xl mb-4 pb-1 border-b-4 inline-block border-indigo-600"> Months {months.length}</h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {
                  months.map(month => <div key={month.id} className="bg-white px-5 py-2 rounded-lg  hover:border-b-4 border-indigo-600 transition duration-500">
                      Month: {month.month} <br />
                      Arabic: {month.pronunciation} <br />
                      English: {month.english_name} 
                  </div>)
              }
          </div>
    </div>
  );
};

export default Months;
