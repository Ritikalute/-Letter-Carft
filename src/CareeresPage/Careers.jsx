import React from 'react'
import Carrereimg1 from './Carrerimg1.png'
// Component 1 image
import Carrercom1img1 from './CarrerCom1img1.png'
import Carrercom1img2 from './CarrerCom1img2.png'

// Component 2 image
import CarrerCom2img1 from './CarrerCom2img1.png'
import CarrerCom2img2line from './CarrerCom2img2line.png'
import CarrerCom2img3 from './CarrerCom2img3.png'
import CarrerCom2img4 from './CarrerCom2img4.png'
import CarrerCom2img5 from './CarrerCom2img5.png'





function Careers() {
  return (
    <>
    <div  className='relative'>

        {/* Component 1 */}
      <img src={Carrereimg1} alt='' />
      <div className="absolute inset-0 flex flex-col justify-center items-start p-5 md:p-20 text-white text-4xl space-y-5 md:space-y-10">
        <img src={Carrercom1img1} alt='' />

        </div>
        
    </div>
    <div className=''>
        <h1 className='relative items-center justify-center left-20 text-3xl'>We are constantly looking for</h1>
        <img  src={Carrercom1img2} alt=''/>
    </div>
    {/* Componnet 1 end */}
    {/* Componnet 2 */}
    <div className="relative">
    <img src={CarrerCom2img1} alt="" className="w-full h-full object-cover" />
    <div className="absolute inset-0 flex flex-col items-center  text-white">
        <h1 className='relative top-40 text-3xl'>Process for Talent to be onboarded</h1>
        {/* <img src={CarrerCom2img2line} alt='relative top-40'/> */}

        {/* <div className='relative '> */}
            <img src={CarrerCom2img3} alt='' className='relative top-40 right-80'/>
            <img src={CarrerCom2img3} alt=''className='relative top-60 right-80'/>
            <img src={CarrerCom2img5} alt='' className='relative top-20 left-80'/>
            <img src={CarrerCom2img5} alt=''className='relative top-40 left-80'/>
                    {/* <img src={CarrerCom2img2line} alt='relative top-40'/> */}




        {/* </div> */}
        {/* <img src={CarrerCom2img2line} alt=''/> */}
    </div>
</div>

    {/* Componnet 2 end */}


    </>
    
  )
}

export default Careers
