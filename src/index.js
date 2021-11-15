import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";
import video from './video.mp4'

import "./styles.css";

function App() {
  useEffect(() => {
    finishVideo()
    document.querySelector('video').playbackRate = 5.0;
    setTimeout(() => {
      var video = document.getElementById('video')
      video.addEventListener('ended', finishVideo())
    }, 4000);
  }, [])
  const finishVideo = () => {
    var vc = document.getElementById('video-container')
    vc.style.display = "none"
  }
  return (
    <div className="App">
      <div id="video-container" className="fullscreen-bg">
        <video loop muted autoPlay poster="img/videoframe.jpg" id="video" className="fullscreen-bg__video">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <h1>Be the first to know what's next in</h1>
        <Timer />
        <Optin />
        <Preloader />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
