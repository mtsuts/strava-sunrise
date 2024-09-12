import React, { useContext } from 'react'
import './App.css';
import NavigationBar from './components/NavigationBar';
import { Outlet } from 'react-router-dom';
import { AuthContext } from './components/AuthContext';



function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <NavigationBar />
      {!isLoggedIn && <div className='text-white text-center p-10 text-4xl'> Please authorize Strava access</div>}
      <Outlet></Outlet>
    </div>
  );
}

export default App;
