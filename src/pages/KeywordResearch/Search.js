import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

function Search() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const outputRef = useRef(null);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { data } = await axios.post(`https://flask-production-f273.up.railway.app/generate-chat`, { prompt: inputText })
    console.log(data);
    setOutputText(data.response);
    setInputText("");
  };

  useEffect(() => {
    // scroll to the bottom of the output box whenever the output text changes
    outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, [outputText]);

  return (
    <div className="chat-box">
      <div className="output" ref={outputRef}>
        {outputText}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type your message here..."
          className="input"
        />
        <button type="submit" className="btn btn-md submit-button mr-5">
          Send
        </button>
      </form>
    </div>
  );
}

export default Search;
