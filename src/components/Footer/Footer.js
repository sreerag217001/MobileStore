import React from 'react'
import AboutUs from '../About/AboutUs'
function Footer() {
  return (
    <div>
      <AboutUs />
      <footer className='bg-black text-white  flex items-center justify-center p-8 w-full mt-5'>
        &copy; MobileStore {new Date().getFullYear()}
      </footer>
    </div>





  )
}

export default Footer
