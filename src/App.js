import React from 'react';
import './App.css';
import Image from './components/Image'
import ImageHover from './assets/profileImgHover.png';
import ProfileImage from './assets/profile-image.png';

const App = () => {
  return (
    <div className='App'>
      <div className="profile_section">
        <div className='img_container'> 
          <Image src={ImageHover} alt='change profile image' className='hover_img' />

          <Image src={ProfileImage} alt="profile" id='profile_img' className='profile-img'/>
        </div>

        <div className='profile_section_content'>
          <p id='twitter'>UdeeFrank</p>
          <p id='slack'>Frankenstylz</p>
        </div>  
      </div>

    </div>
  )
}

export default App