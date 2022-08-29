import React from "react";
import './App.css'
import SideBar from './components/sideBar/SideBar'
import DashBoard from "./components/pages/dashBoard/DashBoard"
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Riders from "./components/pages/riders/Riders";
import Rider from './components/pages/rider/Rider'
import NewRider from "./components/pages/newRider/NewRider";
import Payment from "./components/pages/payment/Payment";

function App() {

  return (
    <BrowserRouter>
    <div className="appWrapper">
        <div className="appFlex">
        <SideBar />
        <Routes>
          <Route path='/react-admin-app' element={<DashBoard />} />
        </Routes>
        <Routes>
          <Route path='/riders' element={<Riders />} />
        </Routes>
        <Routes>
          <Route path='/rider/:riderId' element={<Rider />} />
        </Routes>
        <Routes>
          <Route path='/newRider' element={<NewRider />} />
        </Routes>
        <Routes>
          <Route path='/payment' element={<Payment />} />
        </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}
export default App; 