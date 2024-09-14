import React, { useContext, useEffect, useRef, useState } from 'react'
import './App.css';
import NavigationBar from './components/NavigationBar';
import { Outlet } from 'react-router-dom';
import { getActivities } from './api/api'
import { useSearchParams } from 'react-router-dom';
import { AppContext } from './components/AppContext';

function App() {
  const { data, setData } = useContext(AppContext)
  // const [data, setData] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();


  const dataLoaded = useRef(false)


  useEffect(() => {
    if (dataLoaded.current) {
      return
    }
    dataLoaded.current = true

    getActivities()
      .then((data) => {
        setSearchParams({})
        setData(data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  if(data){
    console.log(data)
  }


  return (
    <div>
      <NavigationBar />
      <Outlet></Outlet>
    </div>
  );
}

export default App;
