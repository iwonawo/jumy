import React from 'react'

//Styles
import './TransactionHistory.scss'
//Components
import Bid from './Bid/Bid'

//dummy data
import BidData from './dataJSON'

let data = BidData

function TransactionHistory(props) {
  return (
    <div className="TransactionHistory">
      <h5 className="title">History</h5>
      <div className="bid-wrapper">
        {/* map through data for single Bid Item */}
        {data.map(item => (
          <Bid
            key={item.id}
            username={item.username}
            time={item.time}
            imgsrc={process.env.PUBLIC_URL + item.img}
            bid={item.bid}
          />
        ))}
      </div>
    </div>
  )
}

export default TransactionHistory
