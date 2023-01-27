import React from 'react'
import Link from 'next/link'

const Navbars = () => {
  return (
    <div>
  <ul>
  <li><Link href="/navbarpage/Home">Home</Link></li>
  <li><Link href="/navbarpage/News">News</Link></li>
  <li><Link href="/navbarpage/Contact">Contact</Link></li>
  <li><Link href="/navbarpage/About">About</Link></li>
  <li><Link href="/loginpage/Login">Login</Link></li>
 </ul>
      
    </div>
  )
}

export default Navbars
