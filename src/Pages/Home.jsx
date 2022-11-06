import React from "react"

import ImageHover from '../assets/profileImgHover.png';
import ProfileImage from '../assets/profile-image.png';
import ShareProfile from '../assets/_Avatar share button1.png';
import ShareProfileHover from '../assets/_Avatar share button_hover.png';
import MoreIconHover from '../assets/more-hover.png';
import MoreIcon from '../assets/more.png';
import Github from '../assets/Icon.png';
import slack from '../assets/slack.svg';


function Home() {
    return (
    <div className='App'>
        <div className="profile_section">

          <div className="share_profile">
            <img src={ShareProfileHover} alt='share button' className='share' id='share' />

            <img src={ShareProfile} alt='share button' className='share' id='share' />
          </div>

          {/* 'more button' for mobile view */}
          <div className="more">
            <img src={MoreIconHover} alt='more button' className='more_btn_hover' id='more_btn' />

            <img src={MoreIcon} alt='more button' className='more_btn' id='more_btn'/>
          </div>

          <div className='img_container'> 
            <img src={ImageHover} alt='change profile' className='hover_img' id='hover_img' />

            <img src={ProfileImage} alt="profile" id='profile__img' className='profile-img'/>
          </div>

          <div className='profile_section_content'>
            <p id='twitter'>marvelfriction_</p>
            <p id='slack'>marvelfriction</p>
          </div>  
        </div>

        <div className='link_section'>
          <a href='https://twitter.com/marvelfriction_' target="_blank" rel="noreferrer" id='my-twitter'>
            <div className="links">
              <h2>Twitter Link</h2>
            </div>
          </a>

          <a href='https://training.zuri.team/' target="_blank" rel="noreferrer" id='btn__zuri'>
            <div className="links">
              <h2>Zuri Team</h2>
            </div>
          </a>

          <a href='https://books.zuri.team' target="_blank" rel="noreferrer" id='books'>
            <div className="links">
              <h2>Zuri Books</h2>
            </div>
          </a>

          <a href='https://books.zuri.team/python-for-beginners?ref_id=frankenstylz' target="_blank" rel="noreferrer" id='book__python'>
            <div className="links">
              <h2>Python Books</h2>
            </div>
          </a>

          <a href='https://backgroundcheck.zuri.team' target="_blank" title='Make no more mistakes with Background Check for Coders' rel="noreferrer" id='pitch'>
            <div className="links">
              <h2>Background Check for Coders</h2>
            </div>
          </a>

          <a href='https://books.zuri.team/design-rules' target="_blank" title='The Ultimate Design Book offered for free by Zuri' rel="noreferrer" id='book__design'>
            <div className="links">
              <h2>Design Books</h2>
            </div>
          </a>

          <a href="/contact" target="_blank" title='Click to contact me' rel="noreferrer" id='contact'>
            <div className="links">
              <h2>Contact Me</h2>
            </div>
          </a>
        </div>

        {/* SOCIAL LINKS ICON */}
        <div className='social_icons'>
          <a href='https://hng9.slack.com'>
            <img src={slack} alt='slack' className='slack_icon' id='slack_icon'/>
          </a>
          
          <a href='https://github.com/marvelfriction'>
            <img src={Github} alt='github' className='git_icon' id='git_icon' />
          </a>
        </div>

    </div>
    )
}

export default Home;
