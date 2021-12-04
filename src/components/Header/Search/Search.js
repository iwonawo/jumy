import React from 'react'

//Styles
import '../Header.scss'

function Search(props) {
  return (
    <div className="Search">
      <img
        src={process.env.PUBLIC_URL + '/images/SearchIcon.svg'}
        alt="search"
      />
      <input type="text" placeholder="Search art or artists..." />
    </div>
  )
}

export default Search
