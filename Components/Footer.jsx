import React from 'react'
import Hcom8img1 from './Hcom8img1.png'
import Hcom8img2 from './Hcom8imge2.png'
import Footerlastimg from './footerlastimg.png'

function Footer() {
  return (
    <div className="relative">
      <img src={Hcom8img1} alt="" className="w-full" />
      <div className="absolute inset-0 flex flex-col md:flex-row justify-start items-start text-white p-5 md:p-20 space-x-0 md:space-x-10 ml-20">
        <img src={Hcom8img2} alt="" className="relative z-10 w-40 md:w-80 h-auto mx-auto md:mx-0" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 md:mt-0 md:ml-20 relative">
          <div className="flex flex-col items-center h-auto w-full hover:border hover:border-2 hover:border-black p-4">
            <h1 className='text-slate-50 text-1xl font-extrabold'>Nam felis a</h1>
            <p className="text-center text-sm mt-3 font-semibold text-white">Enim maecenas</p>
            <p className="text-center text-sm font-semibold text-white">facilisi amet amet</p>
            <p className="text-center text-sm font-semibold text-white">duis. Natoque</p>
            <p className="text-center text-sm font-semibold text-white">massa urna vitae</p>
            <p className="text-center text-sm font-semibold text-white">nullam fermentum</p>
            <p className="text-center text-sm font-semibold text-white">Posuere dis.</p>
          </div>
          <div className="flex flex-col items-center h-auto w-full hover:border hover:border-2 hover:border-black p-4">
            <h1 className='text-slate-50 text-1xl font-extrabold text-white'>Volutpat</h1>
            <p className="text-center text-sm mt-3 font-semibold text-white">Ultricies</p>
            <p className="text-center text-sm font-semibold text-white">consequat tellus</p>
            <p className="text-center text-sm font-semibold text-white">luctus viverra</p>
            <p className="text-center text-sm font-semibold text-white">bibendum morbi</p>
            <p className="text-center text-sm font-semibold text-white">mattis vulputate.</p>
            <p className="text-center text-sm font-semibold text-white">Eleifend dui.</p>
            <p className="text-center text-sm font-semibold text-white">enim.</p>
          </div>
          <div className="flex flex-col items-center h-auto w-full hover:border hover:border-2 hover:border-black p-4">
            <h1 className='text-slate-50 text-1xl font-extrabold text-white'>Adipiscing</h1>
            <p className="text-center text-sm mt-3 font-semibold text-white">Amet diam aliquet</p>
            <p className="text-center text-sm font-semibold text-white">eget posuere</p>
            <p className="text-center text-sm font-semibold text-white">tincidunt. Sed nunc</p>
            <p className="text-center text-sm font-semibold text-white">faucibus at</p>
            <p className="text-center text-sm font-semibold text-white">pellentesque. Non</p>
            <p className="text-center text-sm font-semibold text-white">tincidunt integer</p>
            <p className="text-center text-sm font-semibold text-white">auctor feugiat in</p>
            <p className="text-center text-sm font-semibold text-white">egestas in</p>
          </div>
          <div className="flex flex-col items-center h-auto w-full hover:border hover:border-2 hover:border-black p-4">
            <h1 className='text-slate-50 text-1xl font-extrabold text-white'>Sit ut vitae</h1>
            <p className="text-center text-sm mt-3 font-semibold text-white">Lectus sapien sem</p>
            <p className="text-center text-sm font-semibold text-white">massa libero</p>
            <p className="text-center text-sm font-semibold text-white">bibendum. Purus</p>
            <p className="text-center text-sm font-semibold text-white">placerat arcu diam</p>
            <p className="text-center text-sm font-semibold text-white">ultrices. Non aliquet</p>
            <p className="text-center text-sm font-semibold text-white">quam arcu proin.</p>
          </div>
          <div className="flex flex-col items-center h-auto w-full hover:border hover:border-2 hover:border-black p-4">
            <h1 className='text-slate-50 text-1xl font-extrabold text-white'>In libero enim</h1>
            <p className="text-center text-sm mt-3 font-semibold text-white">In cursus tellus</p>
            <p className="text-center text-sm font-semibold text-white">volutpat ma</p>
            <p className="text-center text-sm font-semibold text-white">varius libero</p>
            <p className="text-center text-sm font-semibold text-white">justo. Eu</p>
            <p className="text-center text-sm font-semibold text-white">ultrices donec</p>
            <p className="text-center text-sm font-semibold text-white">leo diam</p>
          </div>
          <div className="flex flex-col items-center h-auto w-full hover:border hover:border-2 hover:border-black p-4">
            <h1 className='text-slate-50 text-1xl font-extrabold text-white'>Congue auctor</h1>
            <p className="text-center text-sm mt-3 font-semibold text-white">Nunc convallis</p>
            <p className="text-center text-sm font-semibold text-white">consectetur nulla</p>
            <p className="text-center text-sm font-semibold text-white">sollicitudin</p>
            <p className="text-center text-sm font-semibold text-white">elementum sagittis</p>
            <p className="text-center text-sm font-semibold text-white">gravida quisque.</p>
            <p className="text-center text-sm font-semibold text-white">id sed placerat vel</p>
            <p className="text-center text-sm font-semibold text-white">Aliquam eu tristique</p>
          </div>
        </div>
      </div>
      <img src={Footerlastimg} alt='' className='w-[1640px]'/>
    </div>
  )
}

export default Footer