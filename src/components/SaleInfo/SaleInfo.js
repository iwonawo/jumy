import React from 'react'

//Styles
import './SaleInfo.scss'

function SaleInfo(props) {
  return (
    <div className="SaleInfo">
      <p>Edition 4/4</p>
      <div className="flex flex--sb">
        <h2>Resting Refugee</h2>
        <img
          src={process.env.PUBLIC_URL + '/images/jumy-logo.gif'}
          alt="jumy logo"
          className="logo"
        />
      </div>
      <p className="about">
        Resting refuge translates the symbiotic relationship between colors and
        nature.
      </p>
      <div className="bid flex">
        <div className="current-bid">
          <span className="title">Current Bid</span>
          <div className="flex m-t-13 m-b-4">
            <img
              src={process.env.PUBLIC_URL + '/images/linesIcon.svg'}
              alt="icon"
              className="icon"
            />
            <span className="text">3.50 ETH</span>
          </div>
          <span className="text-light">$ 10.000 USD</span>
        </div>
        <div className="end-bid">
          <span className="title">Ends In</span>
          <div className="flex m-t-13">
            <div className="time-item">
              <p className="text m-b-4">19</p>
              <span className="text-light">hours</span>
            </div>
            <div className="time-item">
              <p className="text m-b-4">26</p>
              <span className="text-light">minutes</span>
            </div>
            <div className="time-item">
              <p className="text m-b-4">32</p>
              <span className="text-light">seconds</span>
            </div>
          </div>
        </div>
      </div>
      <a href="/#" className="button button--big">
        Cancel Sale
      </a>
    </div>
  )
}

export default SaleInfo
