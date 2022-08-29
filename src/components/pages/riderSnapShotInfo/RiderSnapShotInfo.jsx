import React from 'react'
import './RiderSnapShotInfo.css'
import {LocationOnOutlined} from '@mui/icons-material'

export default function RiderSnapShotInfo() {
  return (
    <div className='riderSnapShotInfoWrapper'>
      <div className='riderSnapShotInfo-div'>
        <div className='riderSnapShotInfo-img_div'>
        <img src='../images/my--profile_pix (2).jpg' alt='img' className='riderSnapShotInfo-img' />
        </div>
        <h1 className='riderSnapShotInfo-name'>Mike Adeshina</h1>
        <div className='riderSnapShotInfo-location'>
            <LocationOnOutlined className='riderSnapShotInfo-location_icon'/>
            <h2 className='riderSnapShotInfo-location_details'>IBADAN, NIGERIA</h2>
        </div>
        <div className='riderSnapShotInfo-update'>
            <div className='riderSnapShotInfo-work_days'>
               <span>Days</span>
               <span>28</span>
            </div>
            <div className='riderSnapShotInfo-work_days'>
               <span>Rides</span>
               <span>282</span>
            </div>
            <div className='riderSnapShotInfo-work_days'>
               <span>Hours</span>
               <span>764</span>
            </div>
        </div>

      </div>
    </div>
  )
}
