import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function GetRoutes() {
  const [data, setData] = useState([])
  const dataLoaded = useRef(false)

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
    axios.get(`http://localhost:3000/get-routes?code=${readCode()}`, {
      withCredentials: true,
    })
      .then((response) => {
        setData(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])
  if (data) {
    console.log(data)
  }
  const firstName = data?.firstname || ''

  return <div className='text-4xl text-center font-bold mt-10 text-white'> Welcome!</div>
}

