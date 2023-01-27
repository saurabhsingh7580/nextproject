import Link from 'next/link'
import React from 'react'
import Navbars from '../components/Navbars'
import Footer from '../components/Footer'
import Card from  '../components/Card'

const index = () => {
  return (
  <div>
  <Navbars/>
  <div className='Cards'> <Card/>  <Card/>  <Card/></div>
 
  <Footer/>
      
    </div>
  )
}

export default index
