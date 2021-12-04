import React from 'react'

//Styles
import './Header.scss'
//Components
import Navbar from './Navbar/Navbar'
import Search from './Search/Search'

function Header(props) {
  return (
    <header className="Header container">
      <img
        src={process.env.PUBLIC_URL + '/images/JumyLogo.svg'}
        alt="Jumy NFTs logo"
        className="logo"
      />
      <Search />
      <Navbar />
    </header>
  )
}

export default Header
