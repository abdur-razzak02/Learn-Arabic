import { useEffect, useState } from "react";

const Alphabet = () => {
    const [alphabets,setAlphabets] = useState([])
    useEffect(() => {
        fetch('alphabet.json')
            .then(res => res.json())
        .then(data => setAlphabets(data))
    }, [])
    
  return (
    <div className="container mx-auto pb-5 lg:pb-10 px-5 lg:px-0" id="alphabets">
          <h1 className="font-semibold text-2xl mb-4 pb-1 border-b-4 inline-block border-indigo-600">Alphabet { alphabets.length}</h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {
                  alphabets.map(alphabet => <div key={alphabet.id} className="bg-base-100 px-5 py-2 rounded-lg hover:border-b-4 border-indigo-600 transition duration-500 box-border">
                      Alphabet: {alphabet.alphabet} <br />
                      Pronunciation: { alphabet.pronunciation}
                  </div>)
              }
          </div>
    </div>
  );
};

export default Alphabet;
