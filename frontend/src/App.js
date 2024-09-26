import React, { useContext, useEffect, useRef, useState } from 'react'
import './App.css';
import NavigationBar from './components/NavigationBar';
import { Outlet } from 'react-router-dom';
import { AppContext } from './components/AppContext';


function App() {
  const { isLoggedIn, isLoading, data } = useContext(AppContext)
  const token = localStorage.getItem('token')

  return (
    <div>
      <NavigationBar />
      {!token && !isLoading && <p className='text-center text-4xl text-black p-5'>
      </p>}
      <Outlet></Outlet>
    </div>
  );
}

export default App;