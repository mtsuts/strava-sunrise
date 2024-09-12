import React, { useEffect, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../components/AuthContext';

export default function Logout() {
  const { logout } = useContext(AuthContext);
  useEffect(() => {
    axios.get('http://localhost:3000/logout')
      .then((response) => {
        logout()
      }).catch((e) => {
        console.log(e)
      })
  }, [logout])
  window.location.href='http://localhost:3001'
  return <div className='text-white p-5 text-center text-4xl'>You are logged out</div>
}