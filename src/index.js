import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";
import video from './video.mp4'

import "./styles.css";

function App() {
  useEffect(()=>{
    document.querySelector('video').playbackRate = 5.0;
    setTimeout(() => {
      var  vc= document.getElementById('video-container')
      vc.style.display="none"
    }, 4000);
  },[])
  return (
    <div className="App">
      <div id="video-container" className="fullscreen-bg">
        <video loop  muted autoPlay poster="img/videoframe.jpg" id="video" className="fullscreen-bg__video">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <h1>
          Website
          <br />
          Coming Soon
        </h1>
        <Timer />
        <Optin />
        <Preloader />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
