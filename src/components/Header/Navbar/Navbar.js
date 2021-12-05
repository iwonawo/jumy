import React from 'react'

//Styles
import '../Header.scss'

function Navbar(props) {
  return (
    <ul className="Navbar">
      <li className="nav-item">
        <a href="/#">Explore</a>
      </li>
      <li className="nav-item">
        <a href="/#">Drops</a>
      </li>
      <li className="nav-item">
        <a href="/#">Community</a>
      </li>
      <li className="nav-item nav-item--lpm">
        <a href="/#">
          <img
            src={process.env.PUBLIC_URL + '/images/Indicator.svg'}
            alt="indicator"
          />
        </a>
      </li>
      <li className="user-icon nav-item nav-item--lps">
        <div className="img-wrapper">
          <img
            src={process.env.PUBLIC_URL + '/images/jumy-user.jpeg'}
            alt="User"
          />
        </div>
      </li>
      <li className="nav-item nav-item--lps">
        <div className="btn">
          <span className="btn-circle"></span>
          <img
            src={process.env.PUBLIC_URL + '/images/plusIcon.svg'}
            alt="plus"
            className="btn-icon"
          />
          <button href="/#" className="button">
            Create
          </button>
        </div>
      </li>
    </ul>
  )
}

export default Navbar
