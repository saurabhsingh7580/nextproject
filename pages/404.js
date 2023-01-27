import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'


const Errorpage = () => {
    const router = useRouter()
    const handleInput = ()=>{
        
    }
    useEffect(()=>{
        setTimeout(()=>{
            router.push("navbarpage/Home")
        },5000)
       
    },[])
  return (
    <> 
    
    <div >
        <div className='errors'>
          
        <h2>400 We are sorry , pages not found</h2>
          <p>
            the page you are looking for might have been removed had its name
            Changed or is tempoarily unavailabke.

          </p>
        </div>
        

        <h4></h4>  
        {/* <a onClick={()=> router.push("/about")}>Back to HomePages</a> */}
        <a onClick={handleInput}></a>
    </div>
    </>
  )
}

export default Errorpage
