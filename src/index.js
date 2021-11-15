import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";
import video from './video.mp4'

import "./styles.css";

function App() {
  useEffect(() => {
    document.querySelector('video').playbackRate = 2.3;
    var timerContent = document.getElementById("timer-content")
    var video = document.getElementById('video')
    timerContent.style.display = 'none'
    video.addEventListener('play', function () {
      console.log('video started ')
      setTimeout(() => {
        finishVideo()
      }, 6000);
    })
  }, [])
  const finishVideo = () => {
    var vc = document.getElementById('video-container')
    var timerContent = document.getElementById("timer-content")
    timerContent.style.display = 'block'
    vc.style.display = "none"
  }
  return (
    <div className="App">
      <div id="video-container" className="fullscreen-bg">
        <video loop muted autoPlay poster="img/videoframe.jpg" id="video" style={{ width: '100%' }} className="fullscreen-bg__video">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="container " id="timer-content">
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
