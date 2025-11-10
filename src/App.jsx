import React from 'react';
import Navbar from './Components/Navbar.jsx';
import SwiperImages from './Components/SwiperImages.jsx';
import Footer from './Components/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bollywood from './Tabs/Bollywood.jsx';
import Comedy from './Tabs/Comedy.jsx';
import Hollywood from './Tabs/Hollywood.jsx';
import Horror from './Tabs/Horror.jsx';
import NewHot from './Tabs/New&Hot.jsx';
import Webseries from './Tabs/Webseries.jsx';

export default function App() {
  return (
    <div className=' h-full bg-linear-150 from-gray-700 to-black'>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<SwiperImages />} />
          <Route path='/new-and-hot' element={<NewHot />} />
          <Route path='/web-series' element={<Webseries />} />
          <Route path='/comedy' element={<Comedy />} />
          <Route path='/horror' element={<Horror />} />
          <Route path='/hollywood' element={<Hollywood />} />
          <Route path='/bollywood' element={<Bollywood />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}
