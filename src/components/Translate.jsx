import  { useState } from "react";

const Translate = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);

  // Function to handle translation
  const translateText = async () => {
    if (!inputText.trim()) return;
  
    setIsTranslating(true);
  
    try {
      const response = await fetch("http://localhost:5000/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: inputText,
          source: "auto", // Auto-detect source language
          target: "ar",   // Translate to Arabic
          format: "text", // Specify plain text
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      setTranslatedText(data.translatedText);
    } catch (error) {
      console.error("Translation failed:", error.message);
      alert("Translation failed. Please check your input and try again.");
    } finally {
      setIsTranslating(false);
    }
  };
  

  // Function to handle speech synthesis
  const speakArabic = () => {
    if (!translatedText) return;
    const speech = new SpeechSynthesisUtterance(translatedText);
    speech.lang = "ar";
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-4">
      <h1 className="text-2xl font-bold">Bangla/English to Arabic Translator</h1>

      <textarea
        className="textarea textarea-bordered w-full max-w-md"
        placeholder="Enter text in Bangla or English"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button
        className={`btn btn-primary ${isTranslating && "loading"}`}
        onClick={translateText}
        disabled={isTranslating}
      >
        {isTranslating ? "Translating..." : "Translate"}
      </button>

      {translatedText && (
        <div className="mt-4 w-full max-w-md">
          <p className="p-4 bg-gray-100 border rounded-md text-lg">{translatedText}</p>
          <button className="btn btn-secondary mt-2" onClick={speakArabic}>
            🔊 Hear Arabic
          </button>
        </div>
      )}
    </div>
  );
};

export default Translate;
