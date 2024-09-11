import React, { useEffect } from 'react'
import axios from 'axios'

export default function Login() {


  useEffect(() => {
    axios.get('http://localhost:3000/get-auth-url').then((response) => {
      const data = response.data
      const { authUrl } = data
      window.location.href = authUrl
    }).catch((e) => {
      console.log(e)
    })
  }, [])


  return <div className='text-white p-5 text-4xl'>Loading...</div>
}