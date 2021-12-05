import React from 'react'

//Styles
import './Main.scss'
//Components
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import SaleInfo from '../../components/SaleInfo/SaleInfo'
import TransactionHistory from '../../components/TransactionHistory/TransactionHistory'
import ArtImage from '../../components/ArtImage/ArtImage'

function Main(props) {
  return (
    <div className="Main container">
      <ArtImage />
      <SaleInfo />
      <ProfileCard />
      <TransactionHistory />
    </div>
  )
}

export default Main
