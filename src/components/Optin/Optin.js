import React from 'react'
import "./Optin.css";
import meta from '../meta.png';
const Optin = () => {
  return (
    <div>
      <div className="optin">
        <button style={{ margin: '0 5px' }}  >Login</button>
        <button style={{ margin: '0 5px' }} >Sign up</button>
        <button style={{ margin: '0 5px' }} >Subscribe</button>
      </div>
      <div className="mt-2">
        <div className="social-icons-container">
          <div className="social-icons">
            <ul style={{ margin: '0', padding: '0' }} class="d-flex ">
              <a href="https://discord.gg/CT3YpGzH5v" class="ml-auto"><i style={{ color: 'white', margin: '0 10px' }} class=" icon fab fa-discord"></i> </a>
              <a href="https://www.youtube.com/channel/UCyvmQVMsho6BH6lXxUzxLkQ" class="ml-auto"> <i style={{ color: 'white', margin: '0 10px' }} class=" icon fab fa-youtube"></i></a>
              <a href="https://web.facebook.com/N-X-T-G-E-M-110573431436306" class="ml-auto"> <img src={meta} style={{ width: '18px', borderRadius: '3px', color: 'white', margin: '0 10px' }} /></a>
              <a href="https://twitter.com/nxtgem_io" class="ml-auto"> <i style={{ color: 'white', margin: '0 10px' }} class=" icon fab fa-twitter"></i></a>
              <a href="https://t.me/nxtgem_io" class="ml-auto"><i style={{ color: 'white', margin: '0 10px' }} class=" icon fab fa-telegram"></i> </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Optin
