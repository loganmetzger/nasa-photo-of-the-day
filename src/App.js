import React, { useState, useEffect } from "react";
import "./App.css";

import axios from 'axios'

import Apod from './Apod'
import OtherPic from './OtherPic'

// API KEY l3mUrJBO7c7KEWvmQf1M4NSn3QjytWBij9jC0Oqd
// EXAMPLE URL https://api.nasa.gov/planetary/apod?api_key=l3mUrJBO7c7KEWvmQf1M4NSn3QjytWBij9jC0Oqd

// APOD API https://api.nasa.gov/planetary/apod?api_key=l3mUrJBO7c7KEWvmQf1M4NSn3QjytWBij9jC0Oqd

const apodUrl = "https://api.nasa.gov/planetary/apod?api_key=l3mUrJBO7c7KEWvmQf1M4NSn3QjytWBij9jC0Oqd"

console.log(apodUrl)

function App() {

  const [apodLikes, setApodLikes] = useState(0)
  const [otherLikes, setOtherLikes] = useState(0)
  const [apodData, setApodData] = useState({})

  useEffect(() => {
    axios.get(apodUrl)
      .then(res => {
        setApodData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const likePic = function() {
    setApodLikes(apodLikes + 1)
  }

  return (
    <div className="App">
      <header>
        <h1>SPACE</h1>
        <nav>
          <a href="#">Home</a>
          <a href="https://github.com/loganmetzger">Github</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <Apod apodLikes={apodLikes} apodData={apodData} likePic={likePic}/>
      <OtherPic otherLikes={otherLikes} likePic={likePic}/>
      <footer>
        <nav>
          <a href="#">Home</a>
          <a href="https://github.com/loganmetzger">Github</a>
          <a href="#">Contact</a>
        </nav>
      </footer>
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
    