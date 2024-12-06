import { useEffect, useState } from "react";

const Number = () => {
  const [numbers, setNumbers] = useState([]);
  useEffect(() => {
    fetch("numbers.json")
      .then((res) => res.json())
      .then((data) => setNumbers(data));
  }, []);
  return (
    <div className="container mx-auto pb-5 lg:pb-10 px-5 lg:px-0" id="numbers">
          <h1 className="font-semibold text-2xl mb-4 pb-1 border-b-4 inline-block border-indigo-600">Numbers {numbers.length}</h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {
                  numbers.map(number => <div key={number.id} className="bg-base-100 px-5 py-2 rounded-lg hover:border-b-4 border-indigo-600 transition duration-500">
                      Number: {number.number} <br />
                      English: {number.number_in_english} <br />
                      Arabic: { number.pronunciation}
                  </div>)
              }
          </div>
    </div>
  );
};

export default Number;
