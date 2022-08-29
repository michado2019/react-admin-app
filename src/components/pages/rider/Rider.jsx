import { CalendarMonthOutlined, Publish, EmailOutlined, GpsFixedOutlined, PhoneAndroidOutlined, PersonOutlined } from '@mui/icons-material'
import React from 'react'
import './Rider.css'
import { Link } from 'react-router-dom'

export default function Rider() {

  return (
    <div className='riderWrapper'>
      <div className='riderTop-bar'>
      <h1 className='riderTitle'>Edit User</h1>
      <Link to='/newRider'>
      <button className='riderNew-rider'>New Rider</button>
      </Link>
      </div>
      <div className='riderFlex'>
        <div className='riderDetails-div'>
          <div className='riderDetails'>
            <img src='https://img.icons8.com/external-others-inmotus-design/2x/external-Avatar-man-hair-avatars-others-inmotus-design-10.png' alt='img' className='riderDetails-img' />
            <div className='riderDetails-info'>
              <div className='riderDetails-info_name'>Mike Adeshina</div>
              <div className='riderDetails-info_job'>Software Engineer</div>
            </div>
          </div>
          <label className='riderDetails-labels'>Account Details</label>
          <div className='riderDetails-flex'>
            <PersonOutlined className='riderDetails-icons' />
            <div className='riderDetails-icons_text'>mike2022</div>
          </div>
          <div className='riderDetails-flex'>
            <CalendarMonthOutlined className='riderDetails-icons' />
            <div className='riderDetails-icons_text'>24-08-2022</div>
          </div>
          <label className='riderDetails-labels'>Contact Details</label>
          <div className='riderDetails-flex'>
            <PhoneAndroidOutlined className='riderDetails-icons' />
            <div className='riderDetails-icons_text'>+2348100075254</div>
          </div>
          <div className='riderDetails-flex'>
            <EmailOutlined className='riderDetails-icons' />
            <div className='riderDetails-icons_text'>mike@gmail.com</div>
          </div>
          <div className='riderDetails-flex'>
            <GpsFixedOutlined className='riderDetails-icons' />
            <div className='riderDetails-icons_text'>IBADAN | NGA</div>
          </div>
        </div>
        <div className='riderEdit-div'>

          <form>
            <div className='riderEdit-section_one'>
              <h1 className='riderEdit-title'>Edit</h1>
              <label className='riderEdit-labels'>Username</label>
              <input type='text/number' placeholder='mike2022' className='riderEdit-form_input' />
              <label className='riderEdit-labels'>Full Name</label>
              <input type='text' placeholder='Mike Adeshina' className='riderEdit-form_input' />
              <label className='riderEdit-labels'>Email</label>
              <input type='email' placeholder='mike@gmail.com' className='riderEdit-form_input' />
              <label className='riderEdit-labels'>Phone</label>
              <input type='number' placeholder='08100075254' className='riderEdit-form_input' />
              <label className='riderEdit-labels'>Address</label>
              <input type='text' placeholder='IBADAN | NGA' className='riderEdit-form_input' />
            </div>
            <div className='riderEdit-section_two'>
              <div className='riderEditSection-two_flex'>
                 <div className='riderEditSection-two_flex2'>
                  <img src='https://img.icons8.com/external-others-inmotus-design/2x/external-Avatar-man-hair-avatars-others-inmotus-design-10.png' alt='img' className='riderEditSection-two_img' />
                  <label htmlFor='riderEditSection-two_btn'><Publish className='riderEditSection-two_icon' /></label>
                  <input type='file' className='riderEditSection-two_input' id='riderEditSection-two_btn'/>
                 </div>
                 <div>
                  <button className='riderEditSection-two_btn'>Update</button>
                 </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
