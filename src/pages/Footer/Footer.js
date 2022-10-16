import React from 'react'
import FooterLink from './components/FooterLink'
import FooterSub from './components/FooterSub'
import FooterWidget from './components/FooterWidget'

function Footer() {
  return (
    <div className='section footer-section'>
      <div className='footer-widget-section'>
        <img className="shape-1 animation-down" src="assets/images/shape/shape-21.png" alt="Shape" />
        <div className='container'>
          <div className='row'>
            <FooterWidget />
            <FooterLink />
            {/* <FooterSub /> */}
          </div>
        </div>
        <img className="shape-2 animation-left" src="assets/images/shape/shape-22.png" alt="Shape"></img>
      </div>
      <div className='footer-copyright'></div>
    </div>
  )
}

export default Footer