import { Link, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import { FaMicrophone, FaInfoCircle } from "react-icons/fa";

const Details = () => {
    const data = useLoaderData();
    console.log(data);
  const {
    word,
    pronunciation,
    meaning_english,
    meaning_bangla,
    part_of_speech,
      when_to_say,
      example
    } = data;
    
    const handleSpeak = (text) => {
        if ("speechSynthesis" in window) {
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = "ar"; // Arabic language
          window.speechSynthesis.speak(utterance);
        } else {
          alert("Speech synthesis not supported in this browser.");
        }
      };

  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500 text-white p-6">
        <div className="card w-full max-w-2xl shadow-lg bg-white text-gray-800 rounded-lg">
          <div className="card-body">
            <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
              {word}
            </h1>

            <div className="flex flex-col gap-3">
              <div className="bg-orange-50 rounded-lg p-3 flex justify-between">
                <div>
                  <h2 className="mb-1">{word}</h2>
                  <p className="text-gray-700 text-xl font-semibold">
                    {pronunciation}
                  </p>
                </div>
                <div onClick={()=>handleSpeak(data.word)} className="flex justify-center items-center text-2xl px-3 cursor-pointer">
                  <FaMicrophone></FaMicrophone>
                </div>
              </div>

              <div className="bg-purple-100 rounded-lg p-3">
                <h2 className="mb-1">Meaning in Bangla</h2>
                <p className="text-gray-700 text-lg font-semibold">
                  {meaning_bangla}
                </p>
              </div>
                          
              <div className="bg-blue-100 rounded-lg p-3">
                <h2 className="mb-1">Meaning in English</h2>
                <p className="text-xl font-semibold text-gray-700">
                  {meaning_english}
                </p>
              </div>

              <div className="bg-green-100 rounded-lg p-3">
                <h2 className="mb-1">Part of Speech</h2>
                <p className="text-gray-700 text-xl font-semibold capitalize">
                  {part_of_speech}
                </p>
              </div>

              <div className="bg-yellow-100 rounded-lg p-3">
                <h2 className="mb-1">When to Say</h2>
                <p className="text-gray-700 text-lg lg:text-xl font-semibold">
                  {when_to_say}
                </p>
                          </div>
                          
              <div className="bg-red-100 rounded-lg p-3">
                <h2 className="mb-1">Example</h2>
                <p className="text-gray-700 text-lg lg:text-xl font-semibold">
                  { example}
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <Link
                to="/"
                className="btn btn-primary btn-wide text-white bg-blue-500 hover:bg-blue-700"
              >
                <FaInfoCircle className="mr-2" />
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
