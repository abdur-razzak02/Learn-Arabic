import { Link, useLoaderData } from "react-router-dom";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";

const ArabicWords = () => {
  const words = useLoaderData();

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
    <div className="bg-base-200 px-5 lg:px-0 pb-5" id="words">
      <div className="container mx-auto">
        <h1 className="font-semibold text-2xl mb-4 pb-1 border-b-4 inline-block border-indigo-600">
          Words {words.length}
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {words.map((word) => (
            <div
              key={word.Id}
              className="bg-white px-5 py-2 rounded-lg flex justify-between items-center gap-5 hover:border-b-4 border-indigo-600 transition duration-500 box-border"
            >
              <div>
                Word: {word.word} <br />
                Pronunciation: {word.pronunciation} <br />
                Meaning: {word.meaning_bangla} <br />
                <Link to={`/details/${word.Id}`} className="text-indigo-600 text-sm flex items-center gap-1">Details <FaArrowRight size={12}/></Link>
              </div>
              <div>
                <HiMiniSpeakerWave size={25} className="cursor-pointer"
                  onClick={()=>handleSpeak(word.word)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArabicWords;
