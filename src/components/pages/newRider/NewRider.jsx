import React from 'react'
import './NewRider.css'
export default function NewRider() {
    return (
        <div className='newRider-wrapper'>
            <h1 className='newRider-title'>Sign Up</h1>
            <form className='newRider-form'>
                <div className='newRider-form_flex1'>
                <div className='newRider-flex'>
                <label htmlFor='username' className='newRider-labels'>User name</label>
                <input type='text' placeholder='Username' className='newRider-form_group' id='username' />
                </div>
                <div className='newRider-flex'>
                <label htmlFor='fullName' className='newRider-labels'>Full name</label>
                <input type='text' placeholder='Full name' className='newRider-form_group' id='fullName' />
                </div>
                <div className='newRider-flex'>
                <label htmlFor='email' className='newRider-labels'>Email</label>
                <input type='text' placeholder='Email' className='newRider-form_group' id='email' />
                </div>
                <div className='newRider-flex'>
                <label htmlFor='password' className='newRider-labels'>Password</label>
                <input type='password' placeholder='Password' className='newRider-form_group' id='password' />
                </div>
                </div>
                <div className='newRider-form_flex2'>
                <div className='newRider-flex'>
                <label htmlFor='phone' className='newRider-labels'>Phone</label>
                <input type='number' placeholder='Phone' className='newRider-form_group' id='phone' />
                </div>
                <div className='newRider-flex'>
                <label htmlFor='address' className='newRider-labels'>Address</label>
                <input type='text' placeholder='Address' className='newRider-form_group' />
                </div>
                <div className='newRider-flex'>
                <label className='newRider-labels'>Gender</label>
                <div>
                <input type='radio' value='male' name='gender' id='male' className='newRider-gender'/>
                <label htmlFor='male' className='newRider-labels'>Male</label>
                <input type='radio' value='female' name='gender' id='female' className='newRider-gender'/>
                <label htmlFor='female' className='newRider-labels'>Female</label>
                <input type='radio' value='others' name='gender' id='others' className='newRider-gender'/>
                <label htmlFor='others' className='newRider-labels'>Others</label>
                 
                </div>
             </div>
             <div className='newRider-flex'>
                <div>
                <label htmlFor='gender' className='newRider-labels' id='action'>Action</label>
                <select id='gender' className='newRider-select'>
                    <option disabled className='newRider-option'>Active</option>
                    <option value='male' className='newRider-option'>Yes</option>
                    <option value='female' className='newRider-option'>No</option>
                </select>
                </div>
                </div>
                </div>
                <button className='newRider-btn'>Create</button>
            </form>
        </div>
    )
}
