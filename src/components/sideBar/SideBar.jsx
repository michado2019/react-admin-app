import React from 'react'
import './SideBar.css'
import { AccountBalanceOutlined, DashboardOutlined, LightbulbOutlined, LocalTaxiOutlined, LogoutOutlined, QuizOutlined, WbIridescentOutlined, SettingsOutlined, CancelOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export default function SideBar() {

   function handleSidebarCancel(){
      document.querySelector('.sideBar-wrapper').style.display = 'none'
   }
   const [currentLink, setCurrentLink] = React.useState(1)
   return (
      <div className='sideBar-wrapper'>
            <div className='sideBar-logo_div'>
               <LocalTaxiOutlined className='sideBar-logo' />
               <h1 className='sideBar-logo_text'>G Taxi</h1>
         <CancelOutlined className='sideBar-cancel_icon' onClick={handleSidebarCancel}/>
            </div>
         <ul className='sideBar-list'>
            <Link to='/react-admin-app'>
               <li className={currentLink === 1 ? 'sideBar-list_items' : ''} onClick={() => setCurrentLink(1)}>
                  <div className='sideBar-list_flex'>
                     <DashboardOutlined className='sideBar-list_icons' />
                     <h1 className='sideBar-icon_texts'>Dashboard</h1>
                  </div>
               </li>
            </Link>
            <Link to='/riders'>
               <li className={currentLink === 2 ? 'sideBar-list_items' : ''} onClick={() => setCurrentLink(2)}>
                  <div className='sideBar-list_flex'>
                     <WbIridescentOutlined className='sideBar-list_icons' />
                     <h1 className='sideBar-icon_texts'>Riders</h1>
                  </div>
               </li>
            </Link>
            <Link to='/payment'>
               <li className={currentLink === 3 ? 'sideBar-list_items' : ''} onClick={() => setCurrentLink(3)}>
                  <div className='sideBar-list_flex'>
                     <AccountBalanceOutlined className='sideBar-list_icons' />
                     <h1 className='sideBar-icon_texts'>Payment Details</h1>
                  </div>
               </li>
            </Link>
            <li className={currentLink === 4 ? 'sideBar-list_items' : ''} onClick={() => setCurrentLink(4)}>
               <div className='sideBar-list_flex'>
                  <LightbulbOutlined className='sideBar-list_icons' />
                  <h1 className='sideBar-icon_texts'>Learning Center</h1>
               </div>
            </li>
            <li className={currentLink === 5 ? 'sideBar-list_items' : ''} onClick={() => setCurrentLink(5)}>
               <div className='sideBar-list_flex'>
                  <QuizOutlined className='sideBar-list_icons' />
                  <h1 className='sideBar-icon_texts'>FAQs</h1>
               </div>
            </li>
            <li className={currentLink === 6 ? 'sideBar-list_items' : ''} onClick={() => setCurrentLink(6)}>
               <div className='sideBar-list_flex'>
                  <SettingsOutlined className='sideBar-list_icons' />
                  <h1 className='sideBar-icon_texts'>Settings</h1>
               </div>
            </li>
         </ul>
         <div className='logOut'>
            <LogoutOutlined className='logOut-icon' />
            <h1 className='logOut-text'>Logout</h1>
         </div>
      </div>
   )
}
