import React, { useState } from "react";

export default function Form(props) {
  const handleUPClick = () => {
    // console.log("upper case was clicked"+text);
    let newText = text.toLocaleUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const handleDownClick = () => {
    let newText2 = text.toLocaleLowerCase();
    setText(newText2);
  };
  const handleClearClick = () => {
    let newText3 = "";
    setText(newText3);
  };
  const handleItalicClick = () => {
    let newText4 = text.trim();
    setText(newText4);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="main1"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="main">
          <div className="mb-3">
            <label htmlFor="myBox" className="form-label">
              {props.shortHead}
            </label>

            <textarea
              className="form-control"
              value={text}
              id="myBox"
              rows="8"
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#212529",
                color: props.mode === "dark" ? "white" : "black",
              }}
            ></textarea>
          </div>
          <button className="btn_primary " onClick={handleUPClick}>
            Convert to upper case
          </button>
          <button className="btn_primary2 mx-3" onClick={handleDownClick}>
            Convert to lower case
          </button>
          <button className="btn_primary3 mx-3" onClick={handleClearClick}>
            Clear Text
          </button>
          <button className="btn_primary4 mx-3" onClick={handleItalicClick}>
            Trim
          </button>
        </div>
        <div className="text_summ my-2 main">
          <h2>Your text summary</h2>
          character {text.length} and words {text.split(" ").length}
          <div>
            time to read the para is {text.split(" ").length * 0.008} minutes{" "}
          </div>
          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Enter something in text box to preview it"}
          </p>
        </div>
      </div>
    </>
  );
}
