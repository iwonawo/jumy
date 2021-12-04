import React from 'react'

//import components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ProfileCard from './components/ProfileCard/ProfileCard'
import SaleInfo from './components/SaleInfo/SaleInfo'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import ArtImage from './components/ArtImage/ArtImage'

function App() {
  return (
    <div className="App">
      <Header />
      <ArtImage />
      <SaleInfo />
      <ProfileCard />
      <TransactionHistory />
      <Footer />
    </div>
  )
}

export default App
