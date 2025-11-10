import React from 'react'
import logo from '../Images/logo.png';

export default function Footer() {
  return (
    <div>
        <div className='flex flex-col w-full'>
          <ul className='flex items-center justify-center gap-100'>
            <li className='w-50'>
              <img src={logo} alt="logo" />
            </li>
            <li>
              Location
            </li>
          </ul>
        </div>
    </div>
  )
}
