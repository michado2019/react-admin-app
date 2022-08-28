import React from 'react'
import './RidersInfo.css'
import { AccessTimeOutlined, ChevronRightOutlined, ShowChartOutlined, AtmOutlined } from '@mui/icons-material'
export default function RidersInfo() {
  return (
    <div className='ridersInfo-wrapper'>
     <h1 className='ridersInfo-title'>INFORMATION FOR RIDERS</h1>
     <div className='ridersInfo-div'>
     <AccessTimeOutlined className='ridersInfo-icons'/>
     <p className='ridersInfo-text'>How to manage time and get good marks for trips</p>
     <ChevronRightOutlined className='ridersInfo-icons'/>
     </div>
     <div className='ridersInfo-div'>
     <ShowChartOutlined className='ridersInfo-icons'/>
     <p className='ridersInfo-text'>How to regulate transaction over time</p>
     <ChevronRightOutlined className='ridersInfo-icons'/>
     </div>
     <div className='ridersInfo-div'>
     <AtmOutlined className='ridersInfo-icons'/>
     <p className='ridersInfo-text'>Withdrawing money through an ATM</p>
     <ChevronRightOutlined className='ridersInfo-icons'/>
     </div>
    </div>
  )
}
