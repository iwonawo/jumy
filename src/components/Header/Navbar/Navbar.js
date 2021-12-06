import React, { useState } from 'react'

//Styles
import '../Header.scss'

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false)

  // Toggle open menu for small devices
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div>
      <button onClick={toggleMenu} className="menu-icon">
        |||
      </button>
      <ul className={'Navbar ' + (menuOpen ? 'Navbar--open' : '')}>
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
    </div>
  )
}

export default Navbar
