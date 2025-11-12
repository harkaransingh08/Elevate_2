import React from 'react';
import Navbar from './Components/Navbar.jsx';
import SwiperImages from './Components/SwiperImages.jsx';
import Footer from './Components/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bollywood from './Tabs/Bollywood.jsx';
import Comedy from './Tabs/Comedy.jsx';
import Hollywood from './Tabs/Hollywood.jsx';
import Horror from './Tabs/Horror.jsx';
import NewHot from '../src/Tabs/New&Hot.jsx';
import Webseries from './Tabs/Webseries.jsx';
import Profile from './Tabs/profile.jsx';

export default function App() {
  return (
    <div className=' bg-gray-900 py-5'>

      <BrowserRouter>
      <div className='flex justify-center w-full items-center '>
        <Navbar />
      </div>
        
        <Routes>
          <Route path='/' element={<SwiperImages />} />
          <Route path='/new-and-hot' element={<NewHot />} />
          <Route path='/web-series' element={<Webseries />} />
          <Route path='/comedy' element={<Comedy />} />
          <Route path='/horror' element={<Horror />} />
          <Route path='/profile' element={<Profile />} />

        </Routes>
      </BrowserRouter>

      <div className='bg-white/15 text-white flex h-fill justify-center rounded-2xl w-full items-center text-xl'>
        <Footer />
      </div>
    </div>
  );
}
