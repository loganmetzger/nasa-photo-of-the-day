import React, { useState, useEffect } from "react";
import "./App.css";

import axios from 'axios'

// API KEY l3mUrJBO7c7KEWvmQf1M4NSn3QjytWBij9jC0Oqd
// EXAMPLE URL https://api.nasa.gov/planetary/apod?api_key=l3mUrJBO7c7KEWvmQf1M4NSn3QjytWBij9jC0Oqd

// APOD API https://api.nasa.gov/planetary/apod?api_key=l3mUrJBO7c7KEWvmQf1M4NSn3QjytWBij9jC0Oqd

const apodUrl = "https://api.nasa.gov/planetary/apod?api_key=l3mUrJBO7c7KEWvmQf1M4NSn3QjytWBij9jC0Oqd"

function App() {

  const [apodLikes, setApodLikes] = useState(0)
  const [otherLikes, setOtherLikes] = useState(0)

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
    // <header>
      // <h1>SPACE</h1>
      // <nav>
        // <a href="#">Home</a>
        // <a href="#">Github</a>
        // <a href="#">Contact</a>
      // </nav>
    // </header>
    // <div class="daily-container">
      // <h2>Astronomy Picture of the Day</h2>
      // <img src="#" alt="astronomy photo of the day">
      // <button onClick=+1>Like</button>
    // </div>
    // <div class="random-pic-container">
      // <h3>One more for ya!</h3>
      // <img src="#" alt="random space">
      // <button onClick=+1>Like</button>
    // </div>
    // <footer>
      // <a href="#">Home</a>
      // <a href="#">Github</a>
      // <a href="#">Contact</a>
    