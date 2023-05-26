import React, { useState } from 'react';
import { MdTravelExplore } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import video from '../../../../../assets/ScholarSearch.mp4';

const Index = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
    disableScroll();
  };

  const handleQuitVideo = () => {
    setIsVideoPlaying(false);
    enableScroll();
  };

  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const enableScroll = () => {
    document.body.style.overflow = '';
  };

  return (
    <div>
      <a
        target="_blank"
        className="individual-wrapper"
      >
        <span id="work-5">
          <MdTravelExplore />
        </span>
        <h1>ScholarSearch</h1>
        <p>
          This is a full stack application that was made for EasyTramitt, a
          startup that helps students from Brazil to get scholarships abroad.
        </p>
        <div className="key-wrapper">
          <span>Laravel / PHP</span>
          <span>React</span>
          <span>REST API</span>
        </div>
        <a href="https://www.facebook.com/">
          <AiFillGithub />
          <p id="hover">- Source code</p>
        </a>
      </a>

      {isVideoPlaying && (
        <div className="video-overlay">
          <video src={video} controls autoPlay />
          <button onClick={handleQuitVideo}>Quit</button>
        </div>
      )}
    </div>
  );
};

export default Index;
