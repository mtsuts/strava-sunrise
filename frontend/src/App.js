import React, { useState } from 'react'
import './App.css';
import NavigationBar from './components/NavigationBar';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div>
     <NavigationBar/>
     <Outlet></Outlet>
    </div>
  );
}

export default App;
