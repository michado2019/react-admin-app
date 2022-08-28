
import React from 'react'
import './Chart.css'
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { data } from '../../Data';


export default function Chart() {
 
  return (

    <div className='chartWrapper'>
      <h3 className='chartTitle'>Riders Analytics</h3>
    <ResponsiveContainer width='100%' aspect='3/2'>
    <AreaChart data={data}>
    <XAxis dataKey="month" stroke='#ffc107'/>
    
    <Tooltip />
    <Area type="natural" dataKey="Active Rider" stroke="#ffc107" strokeWidth={3} fill="#8068233e" animationBegin={800} animationDuration={2000}/>
    </AreaChart>
    </ResponsiveContainer>
    </div>
  )
}

