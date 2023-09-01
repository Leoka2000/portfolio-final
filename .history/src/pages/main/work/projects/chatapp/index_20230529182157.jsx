import { useState } from 'react'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import video from '../../../../../assets/chat-app.mp4'

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
        <span id='work-4'><BsFillChatDotsFill /></span>
        <h1>Chat app</h1>
        <p>Live chat app application with utilization of Web Sockets</p>
        <div className='key-wrapper'>
          <span>Socket.IO</span>
          <span>React</span>
          <span>Express</span>
          <span>Node.js</span>
        </div>
        <a target='_blank' href="https://github.com/Leoka2000/chat-app-front-end" className="github-link">
          <AiFillGithub />
          <p id="hover">- Front end source</p>
        </a>
        <a target='_blank' href="https://github.com/Leoka2000/chat-app-back-end" className="github-link">
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


export default Index
