import React, { useState } from 'react';
import { MdTravelExplore } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import video from '../../../../../assets/ScholarSearch.mp4';

const Index = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoClick = (event) => {
    if (event.target.tagName !== 'a') {
      setIsVideoPlaying(true);
      disableScroll();
    }
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
      <div onClick={handleVideoClick} className="individual-wrapper">
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
          <span>MySQL</span>
          <span>React</span>
          <span>REST API</span>
        </div>
        <a target='_blank' href="https://github.com/Leoka2000/front-end-ScholarSearch">
          <AiFillGithub />
          <p id="hover">- Front end source</p>
        </a>
        <a target='_blank' href="https://github.com/Leoka2000/back-end-laravel">
          <AiFillGithub />
          <p id="hover">- Back end source</p>
        </a>
      </div>

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
