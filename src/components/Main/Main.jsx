import React from 'react';
import './main.css';
import { assets } from '../../assets/assets';

const Main = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User" />
      </div>
      <div className="main-container">
        <div className="greet">
            <p><span>Hey, You</span> 🤖</p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
        <div className="main-bottom"><div className="search-box">
            <input type="text" placeholder='Enter a promt here'/>
            <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} alt="" />
            </div>
            </div>
            <p className='bottom-info'>
            Gemini refers to Google's family of multimodal AI models, designed to understand and generate information across various formats like text, images, and audio. It powers conversational AI experiences and is integrated into many Google products.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
