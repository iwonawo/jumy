import React from 'react'

//Styles
import './ArtImage.scss'

function ArtImage(props) {
  return (
    <div className="ArtImage">
      <img
        src={process.env.PUBLIC_URL + '/images/jumy-big.png'}
        alt="Hacker News logo"
      />
    </div>
  )
}

export default ArtImage
