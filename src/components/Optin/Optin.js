import React from 'react'
import "./Optin.css";

import meta from '../meta.png';
import discord from '../discord.png';
import telegram from '../telegram.png';
import twitter from '../twitter.png';
import youtube from '../youtube.png';
import subscribe from '../subscribe.png';
import login from '../login.png';
import signup from '../signup.png';


const Optin = () => {
  return (
    <div>
      <div className="optin">
        <img src={signup} style={{ height: '40px', borderRadius: '12px', marginRight: '10px' }} />
        <img src={login} style={{ height: '40px', borderRadius: '12px' }} />
      </div>
      <div className="mt-4" style={{ marginTop: '20px' }}>
        <div className="social-icons-container">
          <div className="social-icons">
            <ul style={{ margin: '0', padding: '0' }} class="d-flex ">
              <a style={{ color: 'transparent' }} href="https://discord.gg/CT3YpGzH5v" class="ml-auto">  <img src={discord} style={{ width: '40px', borderRadius: '7px', color: 'white', margin: '0 10px' }} /> </a>
              <a style={{ color: 'transparent' }} href="https://www.youtube.com/channel/UCyvmQVMsho6BH6lXxUzxLkQ" class="ml-auto">  <img src={youtube} style={{ width: '40px', borderRadius: '7px', color: 'white', margin: '0 10px' }} /> </a>
              <a style={{ color: 'transparent' }} href="https://web.facebook.com/N-X-T-G-E-M-110573431436306" class="ml-auto"> <img src={meta} style={{ width: '40px', borderRadius: '7px', color: 'white', margin: '0 10px' }} /></a>
              <a style={{ color: 'transparent' }} href="https://twitter.com/nxtgem_io" class="ml-auto"> <img src={twitter} style={{ width: '40px', borderRadius: '7px', color: 'white', margin: '0 10px' }} /> </a>
              <a style={{ color: 'transparent' }} href="https://t.me/nxtgem_io" class="ml-auto">  <img src={telegram} style={{ width: '40px', borderRadius: '7px', color: 'white', margin: '0 10px' }} /> </a>
              <a style={{ color: 'transparent' }} href="#" class="ml-auto">  <img src={subscribe} style={{ height: '40px', borderRadius: '12px', color: 'white', margin: '0 10px' }} /> </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Optin
