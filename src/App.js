import React from 'react';
import './App.css';
import LinkButton from './components/LinkButton';
import Image from './components/Image';
import Footer from './components/Footer';

import ImageHover from './assets/profileImgHover.png';
import ProfileImage from './assets/profile-image.png';
import ShareProfile from './assets/_Avatar share button1.png';
import ShareProfileHover from './assets/_Avatar share button_hover.png';
import MoreIconHover from './assets/more-hover.png';
import MoreIcon from './assets/more.png';
import Github from './assets/Icon.png';
import slack from './assets/slack.svg';

const App = () => {
  return (
    <div className='App'>
      <div className="profile_section">

        <div className="share_profile">
          <Image src={ShareProfileHover} alt='share button' className='share' />

          <Image src={ShareProfile} alt='share button' className='share' />
        </div>

        {/* 'more button' for mobile view */}
        <div className="more">
          <Image src={MoreIconHover} alt='more button' className='more_btn_hover' />

          <Image src={MoreIcon} alt='more button' className='more_btn' />
        </div>

        <div className='img_container'> 
          <Image src={ImageHover} alt='change profile image' className='hover_img' />

          <Image src={ProfileImage} alt="profile" id='profile_img' className='profile-img'/>
        </div>

        <div className='profile_section_content'>
          <p id='twitter'>UdeeFrank</p>
          <p id='slack'>Frankenstylz</p>
        </div>  
      </div>

      <div className='link_section'>
        <a href='https://twitter.com/theZuriTeam' target="_blank" rel="noreferrer" id='my_twitter'>
        <LinkButton name="Twitter Link"/>
        </a>

        <a href='https://training.zuri.team/' target="_blank" rel="noreferrer" id='btn-zuri'>
          <LinkButton name="Zuri Team"/>
        </a>

        <a href='https://books.zuri.team' target="_blank" rel="noreferrer" id='books'>
          <LinkButton name="Zuri Books"/>
        </a>

        <a href='https://books.zuri.team/python-for-beginners?ref_id=frankenstylz' target="_blank" rel="noreferrer" id='btn_python'>
          <LinkButton name="Python Books"/>
        </a>

        <a href='https://background.zuri.team' target="_blank" rel="noreferrer" id='pitch'>
          <LinkButton name="Background Check for Coders"/>
        </a>

        <a href='https://books.zuri.team/design-rules' target="_blank" rel="noreferrer" id='book_design'>
          <LinkButton name="Ultimate Design Books"/>
        </a>
      </div>

      <div className='social_icons'>
        <a href='https://slack.com'>
          <Image src={slack} alt='slack' className='slack_icon'/>
        </a>
        
        <a href='https://github.com/Udee101'>
          <Image src={Github} alt='github' className='git_icon' />
        </a>
      </div>

      <footer className='footer_container'>
        <Footer />
      </footer>

    </div>
  )
}

export default App