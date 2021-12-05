import React from 'react'

//Styles
import './Footer.scss'

function Footer(props) {
  return (
    <footer className="Footer">
      <h1>Are you an artist?</h1>
      <div className="btn">
        <span className="btn-circle btn-circle--black"></span>
        <button href="/#" className="button button--white">
          Tell us about you
        </button>
      </div>

      <div className="footernav footernav--top">
        <div className="address">
          <p>The Offices 4, One Central</p>
          <p>Dubai, United Arab Emirates</p>
        </div>
        <a href="/#" className="email center">
          hello@jumy.co
        </a>
        <ul className="nav">
          <li>
            <a href="/#">Instagram</a>
          </li>
          <li>
            <a href="/#">Twitter</a>
          </li>
          <li>
            <a href="/#">Medium</a>
          </li>
        </ul>
      </div>
      <hr className="line-separator" />
      <div className="footernav footernav--bottom">
        <p>All rights reserved.</p>
        <a href="/#" className="center">
          <img
            src={process.env.PUBLIC_URL + '/images/arrowIcon.svg'}
            alt="scroll to top"
          />
        </a>
        <ul className="nav">
          <li>
            <a href="/#">FAQ</a>
          </li>
          <li>
            <a href="/#">Terms</a>
          </li>
          <li>
            <a href="/#">Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
