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
        {data.map(item => (
          <Bid
            key={item.id}
            username={item.username}
            time={item.time}
            imgsrc={process.env.PUBLIC_URL + item.img}
            bid={item.bid}
          />
        ))}
        {/* <Bid />
        <Bid />
        <Bid />
        <Bid />
        <Bid />
        <Bid />
        <Bid />
        <Bid />
        <Bid />
        <Bid /> */}
      </div>
    </div>
  )
}

export default TransactionHistory
