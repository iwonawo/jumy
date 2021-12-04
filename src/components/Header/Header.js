import React from 'react'

//Styles
import './Header.scss'

function Header(props) {
  return (
    <header className="Header">
      <img
        src={process.env.PUBLIC_URL + '/images/JumyLogo.svg'}
        alt="Hacker News logo"
      />
    </header>
  )
}

export default Header
