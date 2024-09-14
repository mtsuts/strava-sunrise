import React, { useState, useEffect, useRef, useContext } from 'react';
import { AppContext } from '../components/AppContext';



export default function UserProfile() {
  const { data, setData } = useContext(AppContext)
  if (data) {
    console.log(data)
  }


  return <div>My profile</div>

}