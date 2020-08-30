// allows us to use state
import React, { useState } from "react";
import Tweet from "./Tweet";

function App() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  // ** How you would use an object holding multiple properties **
  // const [user, setUser] = useState({
  //   name: "Ed",
  //   age: 25,
  //   posts: ["my first post", "my lovely summer"],
  // });

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div className="app">
      <h1 className={isRed ? "red" : ""}>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
    </div>
  );
}

// Export file for other file (in this case index.js) to import it
export default App;
