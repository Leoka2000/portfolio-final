import React, { useState } from 'react'
import { MdInventory } from 'react-icons/md'
import { AiFillGithub } from 'react-icons/ai'
import video from '../../../../../assets/BioNexus.mp4'

const Index = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoClick = (event) => {
    const targetElement = event.target;
    const isGithubLink = targetElement.closest('.github-link');

    if (!isGithubLink) {
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
      <div onClick={handleVideoClick} className='individual-wrapper'>
        <span id='work-2'><MdInventory /></span>
        <h1>BioNexusJr's Inventory</h1>
        <p>Full stack inventory management system with CRUD functionalities that I have developed to be utilized by the members of the enterprise.</p>
        <div className='key-wrapper'>
          <span>React</span>
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>MySQL</span>
        </div>
        <a target='_blank' href="https://github.com/Leoka2000/inventory-bionexusjr" className="github-link">
          <AiFillGithub />
          <p id="hover">- Front end source</p>
        </a>
        <a target='_blank' href="https://github.com/Leoka2000/inventory-app-backend" className="github-link">
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
  )
}
// https://github.com/Leoka2000/inventory-bionexusjr
export default Index
