import React from 'react'

//Styles
import './Bid.scss'

function Bid(props) {
  return (
    <div className="Bid flex flex--sb">
      <div className="flex">
        <div className="bid-avatar">
          <div className="bid-img-wrapper">
            <img src={props.imgsrc} alt="avatar" />
          </div>
          <img
            src={process.env.PUBLIC_URL + '/images/VerifiedIcon.svg'}
            alt="checked"
            className="checked"
          />
        </div>
        <div className="bid-info">
          <p>
            {props.username}
            <span> made a bid for </span>
            {props.bid}
          </p>
          <span className="timer">{props.time}</span>
        </div>
      </div>
      <div className="arrow">
        <img
          src={process.env.PUBLIC_URL + '/images/arrowIconGray.svg'}
          alt="arrow"
        />
      </div>
    </div>
  )
}

export default Bid
