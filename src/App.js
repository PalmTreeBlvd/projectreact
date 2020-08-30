import React from "react";
import Hello from "./sayHello";

function App() {
  return (
    <div>
      <h1>This is the app component</h1>
      <Hello />
    </div>
  );
}

// Export file for other file (in this case index.js) to import it
export default App;
