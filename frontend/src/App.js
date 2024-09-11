import React, { useState } from 'react'
import './App.css';
import GetRoutes from './components/GetRoutes';
import NavigationBar from './components/NavigationBar';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div>
     <NavigationBar/>
     <GetRoutes/>
     <Outlet></Outlet>
    </div>
  );
}

export default App;
