import React from 'react';
import Navbar from './Components/Navbar.jsx';
import SwiperImages from './Components/SwiperImages.jsx';

export default function App() {
  return (
    <div className=' h-full bg-linear-150 from-gray-700 to-black'>
      <div className='py-5 px-30 flex flex-col'>
        <Navbar />
      </div>
      <div className='flex justify-center h-screen items-center'>
        <SwiperImages />
      </div>
    </div>
  );
}
