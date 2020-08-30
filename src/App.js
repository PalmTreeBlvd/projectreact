import React from "react";
import Tweet from "./Tweet";

function App() {
  return (
    <div className="app">
      <Tweet name="Dev Ed" message="hello everyone" />
      <Tweet name="Petah" message="hello everyone 2" />
      <Tweet name="Whateva" message="hello everyone 3" />
      <Tweet name="Kyle" message="hello everyone 4" />
    </div>
  );
}

// Export file for other file (in this case index.js) to import it
export default App;
