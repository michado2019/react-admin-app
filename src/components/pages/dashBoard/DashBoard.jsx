import React from 'react'
import './DashBoard.css'
import TopBar from '../topBar/TopBar'
import Analytics from '../analytics/Analytics'
import RidersInfo from '../ridersInfo/RidersInfo'
import Cards from '../cards/Cards'

export default function DashBoard() {

  
  return (
    <div className='dashBoard-wrapper' >
       <TopBar />
       <div className='dashBoard-flex'>
      <Analytics />
      <RidersInfo />
       </div>
       <div className='dashBoard-cards'>
       <Cards />
       </div>
    </div>
  )
}
