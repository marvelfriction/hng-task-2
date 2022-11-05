import React from 'react'
// import Image from './Image';
import I4G from '../assets/I4G.png';
import Zuri from '../assets/zuri-logo.png';

function Footer() {
  return (
    <>
      <footer className="footer_container">
        <hr />
        <div className='content'>
          <div>
            <img src={Zuri} alt='zuri logo' className='zuri_logo' />
          </div>

          <div className='footer_text'>
            <p>HNG Internship 9 Frontend Task</p>
          </div>

          <div>
            <img src={I4G} alt='I4g logo' className='i4g_logo' />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;