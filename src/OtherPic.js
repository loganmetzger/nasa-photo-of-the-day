import React, { useState, useEffect } from "react";
import "./OtherPic.css";

import axios from 'axios'


const OtherPic =  (props) => {

    const { otherLikes, likePic } = props;

    return (
        <div>
            <h3>Another One</h3>
            <img src="#" />
            <button onClick={(e) => likePic()}>Like it!</button>
            <p>Likes: {otherLikes}</p>
        </div>
    )
}

export default OtherPic;