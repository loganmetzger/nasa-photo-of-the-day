import React from "react";
import "./App.css";

import axios from 'axios'

// API KEY l3mUrJBO7c7KEWvmQf1M4NSn3QjytWBij9jC0Oqd
// EXAMPLE URL https://api.nasa.gov/planetary/apod?api_key=l3mUrJBO7c7KEWvmQf1M4NSn3QjytWBij9jC0Oqd

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;


// General Structure

// app
    // header
      // nav
        // home
        // github
        // contact
      // h1
    // Photo of the day
    // Another space photo
    // Footer
      // home
      // github
      // contact
    