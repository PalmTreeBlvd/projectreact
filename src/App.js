// allows us to use state
import React, { useState } from "react";
import Tweet from "./Tweet";

function App() {
  // Simple objects. These values aren't used but I'm leaving here as examples.
  // To check a value, use if (isRed)
  // To set a value, you use it as a function: setRed(true)
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  // Example for how to change values
  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  // Complex object. Each value in this array creates a new instance of tweet.js.
  // Here would be a good place to set values based on an api call.
  const [users, setUsers] = useState([
    { name: "Ed", message: "Hello there" },
    { name: "John", message: "I am John Snow" },
    { name: "Traversy", message: "I am awesome" },
  ]);

  // users.map() maps each value in the array to its own instance of Tweet.
  // So users[0] = Tweet, users[1] = Tweet, etc for each value in the array.
  // -------
  // tweet.js calls name and message, and that is how values know to render.
  return (
    <div className="app">
      {users.map((user) => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

// Export file so that another file (in this case index.js) can import it.
export default App;
