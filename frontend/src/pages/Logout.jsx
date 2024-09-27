import React, { useEffect, useContext } from 'react'
import axios from 'axios'

export default function Logout() {
  localStorage.setItem('token', '')
  useEffect(() => {
    axios.get('http://localhost:3000/logout')
      .then((response) => {
      }).catch((e) => {
        console.log(e)
      })
  }, [])
  window.location.href = 'http://localhost:3001'
  return <div className='text-white p-5 text-center text-4xl'>You are logged out</div>
}