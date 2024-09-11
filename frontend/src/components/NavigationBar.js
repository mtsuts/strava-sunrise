import * as React from "react";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return <div className='bg-mediumSpace text-white justify-between flex gap-4 p-7 text-4xl'>
    <Link to='/'>Home</Link>
    <Link to='/my-profile'>My Profile</Link>
    <Link to='/login'> Log In</Link>
  </div>
}