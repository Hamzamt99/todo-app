import React from 'react';

import { Route, Routes } from 'react-router-dom';
import SettingForm from './Components/settingsForm';
import Container from './Components/container/Container';
import NavTool from './Components/Header/'
import Context from './Context/Settings';
import Footer from './Components/Footer';

export default function App() {
  return (

    <Context>
      <NavTool />
      <Routes>
        <Route path='/setting' element={<SettingForm />} />
        <Route path='/' element={<Container />} />
      </Routes>
      <Footer />
    </Context>


  );

}
