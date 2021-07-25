import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😉": "Winking Face",
  "😗": "Kissing Face",
  "😐": "Neutral Face",
  "😌": "Relieved Face",
  "😴": "Sleeping Face"
};

const emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [answer, setAnswer] = useState("");

  const emojiInputHandler = (event) => {
    const emoji = event.target.value;
    if (emoji in emojiDictionary) {
      setAnswer(emojiDictionary[emoji]);
    } else {
      setAnswer("Sorry we don't have the emoji in our Database");
    }
  };

  const emojiClickHandler = (emoji) => {
    var meaning = emojiDictionary[emoji];
    setAnswer(meaning);
  };

  return (
    <div className="App">
      <h1>Inside outt </h1>
      <input onChange={emojiInputHandler} />
      <p>{answer}</p>
      <h3>Emoji's We Know </h3>
      {emojisWeKnow.map((item) => {
        return (
          <span
            onClick={() => emojiClickHandler(item)}
            style={{ cursor: "pointer", fontSize: "2rem", padding: "0.5rem" }}
            key={item}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
