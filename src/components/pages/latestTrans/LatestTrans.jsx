import { ArrowForwardOutlined } from '@mui/icons-material'
import React from 'react'
import './LatestTrans.css'
export default function LatestTrans() {
  return (
    <div className='latestTrans-wrapper'>
     <h1 className='latestTrans-title'>Latest Transactions</h1>

      <div className='latestTrans-flex'>
      <img src='../images/my--profile_pix (2).jpg' alt='img' className='latestTrans-img' />
      <div className='latestTrans-details'>
      <h1 className='latestTrans-name'>From Michael Adeshina</h1>
      <p className='latestTrans-time'>{}</p>
      </div>
      <p className='latestTrans-price'>+$50</p>
      </div>
      
      <div className='latestTrans-flex'>
      <img src='./images/my--profile_pix (2).jpg' alt='img' className='latestTrans-img' />
      <div className='latestTrans-details'>
      <h1 className='latestTrans-name'>From Michael Adeshina</h1>
      <p className='latestTrans-time'>{}</p>
      </div>
      <p className='latestTrans-price'>+$50</p>
      </div>

      <div className='latestTrans-flex'>
      <img src='./images/my--profile_pix (2).jpg' alt='img' className='latestTrans-img' />
      <div className='latestTrans-details'>
      <h1 className='latestTrans-name'>From Michael Adeshina</h1>
      <p className='latestTrans-time'>{}</p>
      </div>
      <p className='latestTrans-price'>+$50</p>
      </div>

      <div className='latestTrans-all_flex'>
      <p className='latestTrans-all'>View all</p>
      <ArrowForwardOutlined className='latestTrans-arrow'/>
      </div>
    </div>
  )
}
