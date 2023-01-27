import React, { useState,useEffect } from 'react'
import Navbars from '../../components/Navbars'
import Footer from '../../components/Footer'
import Link from 'next/link'
import axios from 'axios'

const Register = () => {
  const [register,setRegister] = useState({
    name:"",
    phone_no:"",
    adhar_no:"",
    addres:"",
    email:"",
    doj:"",
  })
  const handleInput = (e) =>{
    const {name,value} = e.target;
    setRegister({...register,[name]:value})
  }
  const postData= async (e) =>{
    e.preventDefault()
    const config = {
      "Content-type":"application/json"
    }
    // const api = await axios.post("http://localhost:9000/api/useradd",register,config)
    const api = await axios.post("https://database-2bb44-default-rtdb.firebaseio.com/userDataRecords.json",register,config)
    console.log(api,"api response")
  }
  return (
    <div>
        <Navbars/>
       
        <form action="action_page.php" style={{border:"1px solid #ccc"}} onSubmit={postData} >
     <div className="container">
 
    <h1>Sign Up</h1>
    <hr/>

    <label for="email"><b>Name</b></label>
    <input type="text" placeholder="Enter name" name='name' onChange={handleInput}required />

    <label for="psw"><b>Phone</b></label>
    <input type="number" placeholder="Enter Phone"  name='phone_no' onChange={handleInput}required/>


    <label for="psw"><b>Aadhar</b></label>
    <input type="number" placeholder="Enter Aadhar" name='adhar_no' onChange={handleInput}required/>

    <label for="psw"><b>Addres</b></label>
    <input type="text" placeholder="Enter Addres" name='addres' onChange={handleInput} required/>

    <label for="psw"><b>Email</b></label>
    <input type="email" placeholder="Enter Email" name='email' onChange={handleInput} required/>

    <label for="psw"><b>DOJ</b></label>
    <input type="date" placeholder="Enter DOJ" name='doj' onChange={handleInput} required/>

    <div className="clearfix">
     <Link href="/loginpage/Login"><button type="button" className="loginbtn">Login</button></Link> 
      <button type="submit" className="signupbtn">Sign Up</button>
    </div>
  </div>
</form>
      <Footer/>
    </div>
  )
}

export default Register
