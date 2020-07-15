import React, { useState, useEffect } from "react";
import "./Apod.css";

import axios from 'axios'
import apodUrl from './api'

const Apod =  (props) => {

    const { apodLikes, apodData, likePic } = props;



    return (
        <div>
            <h2>Astronomy Picture of the Day</h2>
            <img src={apodData.url} />
            <button onClick={(e) => likePic()}>Like it!</button>
            <p>Likes: {apodLikes}</p>
        </div>
    )
}

export default Apod;