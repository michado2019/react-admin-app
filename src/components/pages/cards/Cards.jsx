import React from 'react'
import Chart from '../chart/Chart'
import LatestTrans from '../latestTrans/LatestTrans'
import RiderSnapShotInfo from '../riderSnapShotInfo/RiderSnapShotInfo'
import './Cards.css'
export default function Cards() {
  return (
    <div className='cardsWrapper'>
      <Chart />
      <LatestTrans />
      <RiderSnapShotInfo />
    </div>
  )
}
