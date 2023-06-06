import React from 'react'
import { OButton, WButton } from '../Common/Button';
 const UserNavbar = () => {
  return (
    <div className='m-5 p-3'>
      <h1 >User Navbar </h1>
      <WButton name="Register"/>
      <OButton name="login"/>
    </div>
  )
}

export default UserNavbar
