import React from "react";
// Importing the .css file so that css styling works
import "./App.css";

// className="tweet" refers to the tweet class in the App.css file.
// The .css file handles the styling, and using className here calls upon the .css file to make sure the styling is applied.
// <div className="tweet"></div>

// type className="tweet" so that the class in App.css works.
// (where it says .tweet {} in App.css))
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
