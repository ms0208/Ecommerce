import React from 'react'
import './Shop.css';
import Hero from '../../Components/Hero/Hero.jsx';
import Popular from '../../Components/Popular/Popular.jsx';
import Offers from '../../Components/Offers/Offers.jsx';
import NewCollections from '../../Components/NewCollections/NewCollections.jsx';
import Newsletter from '../../Components/Newsletter/Newsletter.jsx';
const Shope = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
    </div>
  )
}

export default Shope
