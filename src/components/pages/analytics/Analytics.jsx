import React from 'react'
import './Analytics.css'
import { AccountBalanceOutlined, MoneyOutlined, SupervisorAccountOutlined, LocalActivityOutlined} from '@mui/icons-material'
export default function Analytics() {

    return (
        <div className='analyticsWrapper'>
            <div className='analyticsSpent'>
                <div className='analyticsSpent-details'>
                    <div className='analyticsSpent-month'>Spent this month</div>
                    <span className='analyticsSpent-amount'>$682</span>
                </div>
                <div className='analyticsSpent-icons_div'>
                <AccountBalanceOutlined className='analyticsSpent-icons' /> 
                </div>
            </div>
            <div className='analyticsSpent'>
                <div className='analyticsSpent-details'>
                    <div className='analyticsSpent-month'>Earnings</div>
                    <span className='analyticsSpent-amount'>$982</span>
                </div>
                <div className='analyticsSpent-icons_div'>
                <MoneyOutlined className='analyticsSpent-icons' /> 
                </div>
            </div>
            <div className='analyticsSpent'>
                <div className='analyticsSpent-details'>
                    <div className='analyticsSpent-month'>New clients</div>
                    <span className='analyticsSpent-amount'>382</span>
                </div>
                <div className='analyticsSpent-icons_div'>
                <SupervisorAccountOutlined className='analyticsSpent-icons' /> 
                </div>
            </div>
            <div className='analyticsSpent'>
                <div className='analyticsSpent-details'>
                    <div className='analyticsSpent-month'>Activity</div>
                    <span className='analyticsSpent-amount'>$482</span>
                </div>
                <div className='analyticsSpent-icons_div'>
                <LocalActivityOutlined className='analyticsSpent-icons' /> 
                </div>
            </div>
        </div>
        
    )
}
