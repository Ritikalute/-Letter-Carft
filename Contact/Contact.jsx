import React from 'react'
import Contactimg from './Contact1img1.png'
import ContactGroupimg from './Group-removebg-preview.png'
import Contactimg2 from './Contacttimg2.png'
import Contactimg4 from './Contactimg4.png'
import Contactimg5 from './Contactimg5.png'


function Contact() {
  return (
    <div className='relative'>
      <img src={Contactimg} alt='' className='relative ' />
      <div className="absolute inset-0 flex    text-white">
        <img src={ContactGroupimg} alt='' className='right-2 object-cover absolute top-6'/>
        <div className="absolute inset-0 flex items-center left-40  text-white">

        <h1 className="relative bottom-10 text-2xl right-10">Contact Us</h1>
        <img src={Contactimg2} alt=''  className='relative top-24 right-40 '/>
        <img src={Contactimg4} alt className='top-20 relative'/>
        </div>
      </div>
      <img src={Contactimg5} alt=''/>
    </div>
  )
}

export default Contact
