import * as React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from './AuthContext'
export default function NavigationBar() {
  const { isLoggedIn } = useContext(AuthContext);


  return <div className='bg-mediumSpace text-white justify-between flex gap-4 p-7 text-4xl'>
    <Link to='/'>Home</Link>
    {isLoggedIn && <Link to='/my-profile'>My Profile</Link>}
    {!isLoggedIn && <Link to='/login'> Log In</Link>}
    {isLoggedIn && <Link to='/logout'> Log Out</Link>}
  </div>
}