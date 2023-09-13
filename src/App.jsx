import React from 'react';

import { Route, Routes } from 'react-router-dom';
import SettingForm from './Components/settingsForm';
import Container from './Components/container/Container';
import NavTool from './Components/Header/'
import Context from './Context/Settings';
import Footer from './Components/Footer';
import LoginProvider from './Context/AuthContext/index';
import Signup from './Components/signup';
export default function App() {
  return (

    <Context>
      <LoginProvider>
        <NavTool />
        <Routes>
          <Route path='/setting' element={<SettingForm />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Container />} />
        </Routes>
        <Footer />
      </LoginProvider>
    </Context>
  );

}
