import React from 'react'
import Languimg from './Langact1img1.png'
import LanguGroupimg from './Langu-Group-removebg-preview.png'
import Languimg2 from './Languimg2.png'
import Languimg4 from './Langutimg4.png'
import Languimg5 from './Langutimg5.png'
// Component 2 imgae 
import LanguCom2img1 from './Langucom2img1.png'
// Component 3 imgae 
import LanguCom3 from './LanguCom3.png'
import LanguageCom3img1 from './LanguCom3img2.png'
// Component 4 imgae
import LanguageCom4img1 from './Language4img1.png'
import LanguageCom4img2 from './LanguageCom4img2.png'
// Component 5 imgae
import LanguageCom5img1 from './LanguageCom5img1.png'
import LanguageCom5img2 from './LanguageCom5img2.png'

// Component 6 imgae
import LanguCom6img3 from './LanguCom6img3.png'
import LanguCom6img5 from './LanguCom6img5.png'

// Component 7 imgae
import LanguageCom7img from './Langucom7img.png'
import LanguageCom7img2 from './LanguageCom7img2.png'




function Language() {
  return (
    <div className='relative'>
         <img src={Languimg} alt='' className='relative ' />
      <div className="absolute inset-0 flex    text-white">
        <img src={LanguGroupimg} alt='' className='right-2 object-cover absolute top-6'/>
        <div className="absolute inset-0 flex items-center left-40  text-white">
        <div className=''>
        <h1 className="relative bottom-10 text-3xl right-10">Professional & Native</h1>
         <h1 className='relative bottom-10 text-3xl right-10'>Chinese Translations</h1>
         </div>
        {/* <img src={Languimg2} alt=''  className='relative top-24 right-40 '/> */}
        <img src={Languimg4} alt className='left-96 top-40 relative'/>
        </div>
      </div>
      {/* <img src={Languimg5} alt=''/> */}
      {/* Component 2 */}
      <div className="relative inset-0 flex items-center justify-center h-[600px] top-20  text-white">
            <img src={LanguCom2img1} alt='' />
        </div>
    {/* Component 3 */}
    
    <div className="relative w-full h-full">
        <img src={LanguCom3} alt='' className='w-full h-full object-cover' />
        <div className="absolute left-10 inset-0  items-center top-40 text-white">
            <h1 className='text-slate-50 text-3xl '>Samples of certified</h1>
            <h1 className='text-slate-50 text-3xl'>translations</h1>
            <img src={LanguageCom3img1} alt='' />

        </div>
    </div>
    {/* Component 4 */}
    <div className="relative inset-0 flex items-center  h-[600px] top-20  text-white">
        <img src={LanguageCom4img1} alt='' />
        <img src={LanguageCom4img2} alt='' />


    </div>
    {/* Component 5 */}
    
    <div className="relative w-full h-full top-20">
        <img src={LanguCom3} alt='' className='w-full h-full object-cover' />
        <div className="absolute left-10 inset-0  items-center top-40 text-white">
            <h1 className='text-slate-50 text-4xl '>Businesses love</h1>
            <h1 className='text-slate-50 text-4xl'>working with us</h1>
            {/* <img src={LanguageCom3img1} alt='' /> */}
            <div className='absolute flex'>
                <div className='top-20 relative'>
                    <img src={LanguageCom5img1} alt='' />
                    <img src={LanguageCom5img1} alt='' />

                </div>
                <img src={LanguageCom5img2} alt='' className='w-2/5 h-auto' />
            </div>

        </div>
        
    </div>

    {/* Component 6 */}
    
    <div className="relative">
    <div className="absolute inset-0 flex flex-col items-center h-[400px] text-white">
        <h1 className='relative top-40 text-3xl text-black'>Translation Process</h1>
        {/* <img src={CarrerCom2img2line} alt='relative top-40'/> */}

        <img src={LanguCom6img3} alt='' className='relative top-40 right-80' />
        <img src={LanguCom6img3} alt='' className='relative top-60 right-80' />
        <img src={LanguCom6img5} alt='' className='relative top-20 left-80' />
        <img src={LanguCom6img5} alt='' className='relative top-40 left-80' />
        {/* <img src={CarrerCom2img2line} alt='relative top-40'/> */}
    </div>
</div>

{/* Component 7 */}

<div className="relative mt-4 top-[850px]">
    <img src={LanguageCom7img} alt='' className='w-full h-auto' />
    <div className="absolute inset-0 flex flex-col items-center justify-center h-[400px] text-white">
        <h1 className='mt-20 text-3xl'>Why LetterCrafts?</h1>
        <img src={LanguageCom7img2} alt='' className='mt-20' />
    </div>
</div>

        
                  





    </div>
  )
}

export default Language
