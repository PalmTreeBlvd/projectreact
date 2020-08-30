import React from "react";
// Importing the .css file so that css styling works
import "./App.css";

// type className="tweet" so that the css class in App.css works. css handles the styling.
// (where it says .tweet {} in App.css))

// props is passed as a parameter but we are using object destructuring to destructure its properties.
// so instead of (props) we see ({name, message}).
function Tweet({ name, message }) {
  return (
    <div className="tweet">
      <h3>{name}</h3>
      <p>{message}</p>
      <h3>Number of likes</h3>
    </div>
  );
}

export default Tweet;
