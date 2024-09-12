import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../components/AuthContext';

export default function UserProfile() {
  const [data, setData] = useState([])
  const dataLoaded = useRef(false)
  const { login } = useContext(AuthContext);

  const readCode = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('code');
    return myParam
  }
  useEffect(() => {
    if (dataLoaded.current) {
      return
    }
    dataLoaded.current = true
    axios.get(`http://localhost:3000/get-data?code=${readCode()}`, {
      withCredentials: true,
    })
      .then((response) => {
        setData(response.data)
        login()
      })
      .catch((e) => {
        console.log(e)
      })
  }, [login])

  if (data) {
    console.log(data)
  }
  const amountOfRoutes = data?.length || ''

  return amountOfRoutes ? <div className='text-4xl text-center font-bold mt-10 text-white'> Welcome! You have {amountOfRoutes} Activities! </div> : <div></div>

}