import React, { useState } from "react";

const ButtonGroupOnly = () => {
  const [text, setText] = useState("");

  const handleButtonClick = (buttonText) => {
    setText((prevText) => prevText + buttonText + " ");
  };

  return (
    <div>
      <div>
        <button onClick={() => handleButtonClick("Owner")}>%Owner%</button>
        <button onClick={() => handleButtonClick("Button 2")}>Button 2</button>
        <button onClick={() => handleButtonClick("Button 3")}>Button 3</button>
      </div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default ButtonGroupOnly;
