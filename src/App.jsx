import React from 'react';

import { Route, Routes } from 'react-router-dom';
import SettingForm from './Components/settingsForm';
import Container from './Components/container/Container';
import NavTool from './Components/Header/'
import Context from './Context/Settings';

export default function App() {
  return (

    <Context>
      <Routes>
        <Route path='/setting' element={<SettingForm />} />
        <Route path='/' element={<Container />} />
      </Routes>
    </Context>


  );

}
