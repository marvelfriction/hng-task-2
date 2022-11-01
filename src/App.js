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
          <Image src={ShareProfileHover} alt='share button' className='share' id='share' />

          <Image src={ShareProfile} alt='share button' className='share' id='share' />
        </div>

        {/* 'more button' for mobile view */}
        <div className="more">
          <Image src={MoreIconHover} alt='more button' className='more_btn_hover' id='more_btn' />

          <Image src={MoreIcon} alt='more button' className='more_btn' id='more_btn'/>
        </div>

        <div className='img_container'> 
          <Image src={ImageHover} alt='change profile image' className='hover_img' id='hover_img' />

          <Image src={ProfileImage} alt="profile" id='profile__img' className='profile-img'/>
        </div>

        <div className='profile_section_content'>
          <p id='twitter'>marvelfriction_</p>
          <p id='slack'>marvelfriction</p>
        </div>  
      </div>

      <div className='link_section'>
        <a href='https://twitter.com/marvelfriction_' target="_blank" rel="noreferrer" id='my-twitter'>
        <LinkButton name="Twitter Link"/>
        </a>

        <a href='https://training.zuri.team/' target="_blank" rel="noreferrer" id='btn__zuri'>
          <LinkButton name="Zuri Team"/>
        </a>

        <a href='https://books.zuri.team' target="_blank" rel="noreferrer" id='books'>
          <LinkButton name="Zuri Books"/>
        </a>

        <a href='https://books.zuri.team/python-for-beginners?ref_id=frankenstylz' target="_blank" rel="noreferrer" id='book__python'>
          <LinkButton name="Python Books"/>
        </a>

        <a href='https://backgroundcheck.zuri.team' target="_blank" title='Make no more mistakes with Background Check for Coders' rel="noreferrer" id='pitch'>
          <LinkButton name="Background Check for Coders"/>
        </a>

        <a href='https://books.zuri.team/design-rules' target="_blank" title='The Ultimate Design Book offered for free by Zuri' rel="noreferrer" id='book__design'>
          <LinkButton name="Design Books"/>
        </a>
      </div>

      <div className='social_icons'>
        <a href='https://hng9.slack.com'>
          <Image src={slack} alt='slack' className='slack_icon' id='slack_icon'/>
        </a>
        
        <a href='https://github.com/marvelfriction'>
          <Image src={Github} alt='github' className='git_icon' id='git_icon' />
        </a>
      </div>

      <footer className='footer_container'>
        <Footer />
      </footer>

    </div>
  )
}

export default App