import React from 'react'
import Navbars from '../../components/Navbars'
import Footer from '../../components/Footer'
import Link from 'next/link'

const Login = () => {
  return (
    <div>
        <Navbars/>


        <h2><span>Sing in</span></h2>
     <form className="modal-content animate" action="/action_page.php">
    
      <div className="imgcontainer">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="Avatar" className="avatar"/>
    </div>

    <div className="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required/>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required/>

      <button type="submit">Login</button>
      <Link href='/loginpage/Register'> <button type="button" className="registerbtn">Register</button></Link>      
    </div>
  </form>
<Footer/>
      
    </div>
  )
}

export default Login
