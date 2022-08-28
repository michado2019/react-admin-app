import React from 'react'
import DashBoard from '../dashBoard/DashBoard'
import Riders from '../riders/Riders'
import './Main.css'

export default function Main() {
  return (
    <div className='mainWrapper'>
      <DashBoard />
      <Riders />
    </div>
  )
}
