import React from 'react'
import './TopBar.css'
import { MenuOutlined } from '@mui/icons-material'

export default function TopBar() {

// const cancel = document.getElementById("cancel")

// menu.addEventListener("click", displayMenu)
// cancel.addEventListener("click", clearMenu)

function handleDisplayMenuContent(){
    document.querySelector('.sideBar-wrapper').style.display = "block"
    document.querySelector('.topBar-menu_icon').style.display = "none"

}

// function clearMenu(){
//     document.getElementById("nav--links").style.display = "none"
   
// }
  return (
    <div className='topBar-wrapper'>
      <div className='topBar-top'>
        <div className='topBar-top_welcome'>
          <MenuOutlined className='topBar-menu_icon' onClick={handleDisplayMenuContent}/>
          <h1 className='topBar-top_name'>Hi, Sam Afolabi, </h1>
          <p className='topBar-top_greetings'>Welcome to<span className='topBar-top_app'>MY TAXI DASHBOARD</span></p>
        </div>
        <div className='topBar-search_div'>
          <input type='search' placeholder='search....' className='topBar-search' />
        </div>
      </div>
    </div>
  )
}
