import React, { useState } from "react";

const ButtonGroupAddNew = () => {
  const [text, setText] = useState("");
  const [buttons, setButtons] = useState(["Button 1", "Button 2", "Button 3"]);

  const handleButtonClick = (buttonText) => {
    setText((prevText) => prevText + buttonText + " ");
  };

  const handleAddButton = () => {
    const newButtonName = prompt("Enter a name for the new button:");
    if (newButtonName) {
      setButtons((prevButtons) => [...prevButtons, newButtonName]);
    }
  };

  return (
    <div>
      <div>
        {buttons.map((buttonName) => (
          <button
            key={buttonName}
            onClick={() => handleButtonClick(buttonName)}
          >
            {buttonName}
          </button>
        ))}
        <button onClick={handleAddButton}>Add Button</button>
      </div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default ButtonGroupAddNew;
