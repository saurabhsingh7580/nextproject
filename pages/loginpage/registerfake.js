import React, { useState,useEffect } from 'react'
import Navbars from '../../components/Navbars'
import Footer from '../../components/Footer'
import Link from 'next/link'

const Register = () => {
  const [addowner, setAddowner] = useState({
    name:"",
    phone_no:"",
    adhar_no:"",
    addres:"",
    email:"",
    doj:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddowner((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  // post method
  const submitData = async (e) => {
    e.preventDefault();
    const data = {
      name: addowner.name,
      phone_no: addowner.phone_no,
      adhar_no: addowner.adhar_no,
      address: addowner.address,
      email: addowner.email,
      doj: addowner.doj,
    };
    const reqData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("https://database-2bb44-default-rtdb.firebaseio.com/userDataRecords.json", reqData).then((response) => {
      if (response.status == 200) {
        console.log("data insert");
      }
    });
    setAddowner({
      name: "",
      phone: "",
      adhar_no: "",
      address: "",
      email: "",
      doj: "",
    });
  };
  return (
    <div>
        <Navbars/>
       
    <form action="action_page.php" style={{border:"1px solid #ccc"}} onSubmit={postData} >
     <div className="container">
 
    <h1>Sign Up</h1>
    <hr/>

    <label for="email"><b>Name</b></label>
    <input type="text" placeholder="Enter name"  name="name"
                    value={addowner.name}
                    onChange={handleChange} />

    <label for="psw"><b>Phone</b></label>
    <input type="number" placeholder="Enter Phone"  name="phone_no"
                    value={addowner.phone_no}
                    onChange={handleChange}required/>


    <label for="psw"><b>Aadhar</b></label>
    <input type="number" placeholder="Enter Aadhar" name='adhar_no' value={addowner.adhar_no}
                    onChange={handleChange}required/>

    <label for="psw"><b>Addres</b></label>
    <input type="text" placeholder="Enter Addres" name='addres'  value={addowner.addres}
                    onChange={handleChange} required/>

    <label for="psw"><b>Email</b></label>
    <input type="email" placeholder="Enter Email" name='email'  value={addowner.email}
                    onChange={handleChange}  required/>

    <label for="psw"><b>DOJ</b></label>
    <input type="date" placeholder="Enter DOJ" name='doj'  value={addowner.doj}
                    onChange={handleChange} required/>

    <div className="clearfix">
     <Link href="/loginpage/Login"><button type="button" className="loginbtn">Login</button></Link> 
      <button type="submit" className="signupbtn"  onClick={submitData}>Sign Up</button>
    </div>
  </div>
</form>
      <Footer/>
    </div>
  )
}

export default Register