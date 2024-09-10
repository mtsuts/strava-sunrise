import React, { useEffect } from 'react'
import axios from 'axios'

export default function Login() {


  useEffect(() => {
    axios.get('http://localhost:3000/get-auth-url').then((response) => {
      const data = response.data
      const { authUrl } = data
      window.location.href = authUrl
    })
  }, [])


  return <div>Loading...</div>
}