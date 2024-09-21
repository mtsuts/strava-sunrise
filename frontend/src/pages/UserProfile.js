import React, { useState, useEffect, useRef, useContext } from 'react';
import { AppContext } from '../components/AppContext';
import { GetActivities } from '../api/api'
import { useSearchParams } from 'react-router-dom';



export default function UserProfile() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, setData } = useContext(AppContext)
  const dataLoaded = useRef(false)
  useEffect(() => {
    if (dataLoaded.current) {
      return
    }
    dataLoaded.current = true
    GetActivities()
      .then((data) => {
        setSearchParams({})
        setData(data)
        console.log(data)
        localStorage.setItem('token', data.accessToken)
      })
      .catch((e) => {
        console.log(e.message)
      })
  }, [])

  return <div className='text-center text-white text-6xl p-5'>My profile</div>
}