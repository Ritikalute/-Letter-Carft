// // 
// import React from 'react';
// import VectorImg from './Vector 2.png';
// import GroupInsideImg from './Group-removebg-preview.png';
// import vectorLogo from './vector-logo-home.png';
// import HComImg from './H-com-i-1.png';
// import HComImg2 from './H-com-i-2.png';
// import HComImg3 from './H-com-i-3.png';
// import HComImg4 from './H-com-i-4.png';
// import HComImg5 from './H-com-i-5.png';
// import HComImg6 from './H-com-i-6.png';
// import Com2Img from './Com2Img.png';
// import HcomN2Img2 from './Hcom2Image2.png';
// import Hcom2image3 from './Hcom2imge3.png';
// import Hcom2image21 from './Hcom2Image2-1.png';
// import Hcomimage22 from './Hcom2Image2-2.png';
// import Hcom2image23 from './Hcom2Image2-3.png';
// import Hcom2Image31 from './Hcom2Image3-1.png';
// import Hcom2Image32 from './Hcom2Image3-2.png';
// import HcomImage33 from './Hcom2Image3-3.png';

// import Navbers from '../Components/Navbers';

// function Home() {
//   return (
//     <>
//       <Navbers />
//       <div className="relative">
//         <img src={VectorImg} alt="" className="w-full h-auto" />
//         <div className="absolute inset-0 flex flex-col top-[184px] left-5 md:left-20 text-white text-4xl">
//           <h1>LetterCraftsT</h1>
//           <p className="text-sm mt-10 md:mt-20 font-light">Professional translators delivering High Quality,</p>
//           <p className="text-sm font-light">Fast & Affordable translation services in 🇸🇬 Singapore.</p>
//           <button className="text-white bg-[#3D65FF] rounded-full mt-10 text-sm h-[44px] w-[153px]">learn more →</button>
//         </div>
//         <img src={GroupInsideImg} alt="" className="absolute top-[50px] right-0 h-[300px] md:h-[600px] w-full md:w-[688px] bg-[#101D2E]" />
//         <div className="relative top-[0px] md:top-[10px] right-0 w-full md:w-[688px] flex float-right justify-center md:justify-start gap-5 p-4">
//           <div className="h-[200px] w-[258.5px] rounded-md bg-[#E6FFAF] p-4">
//             <img src={vectorLogo} alt="" className="h-[29px] w-[18px]" />
//             <h6 className="text-black font-semibold mt-2">Certified translation and notarisation</h6>
//             <p className="text-sm mt-2">Neque nibh tincidunt amet lectus feugiat nisl varius massa</p>
//             <p className="text-cyan-600 mt-2">learn more →</p>
//           </div>
//           <div className="h-[200px] w-[258.5px] rounded-md bg-[#FFC4B1] p-4">
//             <img src={vectorLogo} alt="" className="h-[29px] w-[18px]" />
//             <h6 className="text-black font-semibold mt-2">Certified translation and notarisation</h6>
//             <p className="text-sm mt-2">Neque nibh tincidunt amet lectus feugiat nisl varius massa</p>
//             <p className="text-cyan-600 mt-2">learn more →</p>
//           </div>
//           <div className="h-[200px] w-[258.5px] rounded-md bg-[#AEE7FF] p-4">
//             <img src={vectorLogo} alt="" className="h-[29px] w-[18px]" />
//             <h6 className="text-black font-semibold mt-2">Certified translation and notarisation</h6>
//             <p className="text-sm mt-2">Neque nibh tincidunt amet lectus feugiat nisl varius massa</p>
//             <p className="text-cyan-600 mt-2">learn more →</p>
//           </div>
//         </div>
//       </div>

//       {/* Second Component HOME PAGE */}
//       <div className="flex flex-wrap justify-center gap-5 my-10">
//         <img src={HComImg} alt="" className="h-[66px] w-[177px]" />
//         <img src={HComImg2} alt="" className="h-[66px] w-[177px]" />
//         <img src={HComImg3} alt="" className="h-[66px] w-[177px]" />
//         <img src={HComImg4} alt="" className="h-[66px] w-[177px]" />
//         <img src={HComImg5} alt="" className="h-[66px] w-[177px]" />
//         <img src={HComImg6} alt="" className="h-[66px] w-[177px]" />
//       </div>

//       <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4">
//         {/* Flex 1st Div */}
//         <div className="h-auto lg:h-[520px] w-[90%] lg:w-[660px] bg-white p-4">
//           <div className="h-auto lg:h-[135px] w-full lg:w-[420px] bg-slate-100 relative p-4">
//             <h1 className="text-2xl lg:text-4xl font-semibold">Translation Services</h1>
//             <p className="mt-4 lg:mt-6 text-sm text-[#697587]">Letter Crafts is your partner for over 80 languages. Our team of native translators and industry experts can cater to all your translation needs.</p>
//           </div>
//           <img src={Com2Img} alt="" className="h-[200px] mt-8 lg:mt-40 mx-auto lg:ml-24" />
//         </div>

//         {/* Flex 2nd Div */}
//         <div className="h-auto lg:h-[520px] w-[90%] lg:w-[668px] bg-white p-4">
//           <div className="h-auto lg:h-[408px] w-full lg:w-[568px] bg-white relative">
//             {/* First Line */}
//             <div className="h-auto lg:h-[120px] w-full flex flex-wrap gap-4 lg:gap-8">
//               <div className="h-[130px] w-full lg:w-[166px] bg-slate-50 hover:border hover:border-2 hover:border-black p-4">
//                 <img src={vectorLogo} alt="" className="mx-auto h-auto w-auto mt-5" />
//                 <p className="text-center text-sm mt-3 font-semibold">Certified</p>
//                 <p className="text-center text-sm font-semibold">translation and</p>
//                 <p className="text-center text-sm font-semibold">notarisation</p>
//               </div>
//               <div className="h-[130px] w-full lg:w-[166px] bg-slate-50 hover:border hover:border-2 hover:border-black p-4">
//                 <img src={HcomN2Img2} alt="" className="mx-auto h-auto w-auto mt-5" />
//                 <p className="text-center text-sm mt-3 font-semibold">Business document</p>
//                 <p className="text-center text-sm font-semibold">translation</p>
//               </div>
//               <div className="h-[130px] w-full lg:w-[166px] bg-slate-50 hover:border hover:border-2 hover:border-black p-4">
//                 <img src={Hcom2image3} alt="" className="mx-auto h-auto w-auto mt-5" />
//                 <p className="text-center text-sm mt-3 font-semibold">Personal document</p>
//                 <p className="text-center text-sm font-semibold">translation</p>
//               </div>
//             </div>

//             {/* Second Line */}
//             <div className="h-auto lg:h-[120px] w-full flex flex-wrap gap-4 lg:gap-10 mt-10">
//               <div className="h-[130px] w-full lg:w-[166px] bg-slate-50 hover:border hover:border-2 hover:border-black p-4">
//                 <img src={Hcom2image21} alt="" className="mx-auto h-auto w-auto mt-5" />
//                 <p className="text-center text-sm mt-3 font-semibold">Website and apps</p>
//                 <p className="text-center text-sm font-semibold">translation and</p>
//                 <p className="text-center text-sm font-semibold">localisation</p>
//               </div>
//               <div className="h-[130px] w-full lg:w-[166px] bg-slate-50 hover:border hover:border-2 hover:border-black p-4">
//                 <img src={Hcomimage22} alt="" className="mx-auto h-auto w-auto mt-5" />
//                 <p className="text-center text-sm mt-3 font-semibold">Typesetting and</p>
//                 <p className="text-center text-sm font-semibold">copywriting</p>
//                 <p className="text-center text-sm font-semibold">documents</p>
//               </div>
//               <div className="h-[130px] w-full lg:w-[166px] bg-slate-50 hover:border hover:border-2 hover:border-black p-4">
//                 <img src={Hcom2image23} alt="" className="mx-auto h-auto w-auto mt-5" />
//                 <p className="text-center text-sm mt-3 font-semibold">Marketing</p>
//                 <p className="text-center text-sm font-semibold">translation and</p>
//                 <p className="text-center text-sm font-semibold">transcreation</p>
//               </div>
//             </div>

//             {/* Third Line */}
//             <div className="h-auto lg:h-[120px] w-full flex flex-wrap gap-4 lg:gap-10 mt-10">
//               <div className="h-[130px] w-full lg:w-[166px] bg-slate-50 hover:border hover:border-2 hover:border-black p-4">
//                 <img src={Hcom2Image31} alt="" className="mx-auto h-auto w-auto mt-5" />
//                 <p className="text-center text-sm mt-3 font-semibold">Business specific</p>
//                 <p className="text-center text-sm font-semibold">translation</p>
//               </div>
//               <div className="h-[130px] w-full lg:w-[166px] bg-slate-50 hover:border hover:border-2 hover:border-black p-4">
//                 <img src={Hcom2Image32} alt="" className="mx-auto h-auto w-auto mt-5" />
//                 <p className="text-center text-sm mt-3 font-semibold">Legal document</p>
//                 <p className="text-center text-sm font-semibold">translation</p>
//               </div>
//               <div className="h-[130px] w-full lg:w-[166px] bg-slate-50 hover:border hover:border-2 hover:border-black p-4">
//                 <img src={HcomImage33} alt="" className="mx-auto h-auto w-auto mt-5" />
//                 <p className="text-center text-sm mt-3 font-semibold">Technical and IT</p>
//                 <p className="text-center text-sm font-semibold">translation</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;
import React from 'react';
import VectorImg from './Vector 2.png';
import GroupInsideImg from './Group-removebg-preview.png';
import vectorLogo from './vector-logo-home.png';
import HComImg from './H-com-i-1.png';
import HComImg2 from './H-com-i-2.png';
import HComImg3 from './H-com-i-3.png';
import HComImg4 from './H-com-i-4.png';
import HComImg5 from './H-com-i-5.png';
import HComImg6 from './H-com-i-6.png';
import Com2Img from './Com2Img.png';
// COMPONENT 2 Images
import HcomN2Img2 from './Hcom2Image2.png';
import Hcom2image3 from './Hcom2imge3.png';
import Hcom2image21 from './Hcom2Image2-1.png';
import Hcomimage22 from './Hcom2Image2-2.png';
import Hcom2image23 from './Hcom2Image2-3.png';
import Hcom2Image31 from './Hcom2Image3-1.png';
import Hcom2Image32 from './Hcom2Image3-2.png';
import HcomImage33 from './Hcom2Image3-3.png';
// Component 3 Images
import Hcom3box1img from './Com3box1img.png'
import Hcom3box2img from './Com3box2img.png'
import Hcom3box3img from './Com3box3img.png'
import Hcom3box2img1 from './Com3box2img1.png'
import Hcom3HomeBgImg1 from './Com3HomeBgImg1.png'
import HcomHomeBgImg2 from './Com3HomeBgImg2.png'
import Hcom3HomeBgImg3 from './Com3HomeBgImg3.png'
import Hcom3HomeBgImg4 from './Com3HomeBgImg4.png'

// Componengt 4 Images 
import Hcom4Img1 from './Com4Img1.png'
import Hcom4Img2 from './Com4Img2.png'
import Hcome4Img21 from './Com4Imge21.png'
import Hcom4Img22 from './Com4Imge22.png'
import Hcom4Img23 from './Com4Imge23.png'
import Hcom4Imge24 from './Com4Imge24.png'

// Component 5 images 
import Hcom5Img1 from './Hcom5Imag1.png'
import Hcom5box1img1 from './Hcom5box1img1.png'
import Hcom5box2img2 from './Hcom5box2img2.png'
import  Hcom5box1img3 from './Hcom5box1img3.png'
import Hcom5box1img4 from './H-com-i-5.png'
import Hcom5box1img5 from './H-com-i-3.png'
import Hcom5box1img6 from './H-com-i-2.png'

// Component 6 images 
import Hcom6img1 from './Hcom6img1.png'
import Hcom6img2 from './Hcom6img2.png'
import Hcom6img3 from './Hcom6img3.png'

// Component 7 image
import Hcom7image1 from './Hcom7img1.png'
import Hcom7image2 from './Hcom7img2.png'

// Component 8 image
// import Hcom8img1 from './Hcom8img1.png'
// import Hcom8img2 from './Hcom8imge2.png'

import Navbers from '../Components/Navbers';
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
      {/* <Navbers /> */}
      <div className="relative">
        <img src={VectorImg} alt="" className="w-full h-auto" />
        <div className="absolute inset-0 flex flex-col top-1/4 left-5 md:left-20 text-white text-4xl space-y-5 md:space-y-10">
          <h1>LetterCraftsT</h1>
          <div className="text-sm md:text-base font-light space-y-2">
            <p>Professional translators delivering High Quality,</p>
            <p>Fast & Affordable translation services in 🇸🇬 Singapore.</p>
          </div>
          <button className="text-white bg-[#3D65FF] rounded-full mt-5 md:mt-10 text-sm h-[44px] w-[153px]">learn more →</button>
        </div>
        <img src={GroupInsideImg} alt="" className="absolute top-1/2 right-0 transform -translate-y-1/2 h-[300px] md:h-[600px] w-full md:w-[688px] bg-[#101D2E]" />
        <div className="absolute top-[600px] md:top-[460px] right-0 w-full md:w-[688px] flex  justify-center md:justify-start gap-5 p-4 hidden md:flex">
          <div className="h-[200px] w-[258.5px] rounded-md bg-[#E6FFAF] p-4">
            <img src={vectorLogo} alt="" className="h-[29px] w-[18px]" />
            <h6 className="text-black font-semibold mt-2">Certified translation and notarisation</h6>
            <p className="text-sm mt-2">Neque nibh tincidunt amet lectus feugiat nisl varius massa</p>
            <p className="text-cyan-600 mt-2">learn more →</p>
          </div>
          <div className="h-[200px] w-[258.5px] rounded-md bg-[#FFC4B1] p-4">
            <img src={vectorLogo} alt="" className="h-[29px] w-[18px]" />
            <h6 className="text-black font-semibold mt-2">Certified translation and notarisation</h6>
            <p className="text-sm mt-2">Neque nibh tincidunt amet lectus feugiat nisl varius massa</p>
            <p className="text-cyan-600 mt-2">learn more →</p>
          </div>
          <div className="h-[200px] w-[258.5px] rounded-md bg-[#AEE7FF] p-4">
            <img src={vectorLogo} alt="" className="h-[29px] w-[18px]" />
            <h6 className="text-black font-semibold mt-2">Certified translation and notarisation</h6>
            <p className="text-sm mt-2">Neque nibh tincidunt amet lectus feugiat nisl varius massa</p>
            <p className="text-cyan-600 mt-2">learn more →</p>
          </div>
        </div>
      </div>

      {/* 2nd Second Component HOME PAGE */}
      <div className="flex flex-wrap justify-center gap-5 my-10">
        <img src={HComImg} alt="" className="h-[66px] w-[177px]" />
        <img src={HComImg2} alt="" className="h-[66px] w-[177px]" />
        <img src={HComImg3} alt="" className="h-[66px] w-[177px]" />
        <img src={HComImg4} alt="" className="h-[66px] w-[177px]" />
        <img src={HComImg5} alt="" className="h-[66px] w-[177px]" />
        <img src={HComImg6} alt="" className="h-[66px] w-[177px]" />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4">
        {/* Flex 1st Div */}
        <div className="h-auto lg:h-[520px] w-[90%] lg:w-[660px] bg-white p-4">
          <div className="h-auto lg:h-[135px] w-full lg:w-[420px] bg-slate-100 p-4">
            <h1 className="text-2xl lg:text-4xl font-semibold">Translation Services</h1>
            <p className="mt-4 lg:mt-6 text-sm text-[#697587]">Letter Crafts is your partner for over 80 languages. Our team of native translators and industry experts can cater to all your translation needs.</p>
          </div>
          <img src={Com2Img} alt="" className="h-[200px] mt-8 lg:mt-40 mx-auto lg:ml-24" />
        </div>

        {/* Flex 2nd Div */}
        <div className="h-auto lg:h-[520px] w-[90%] lg:w-[668px] bg-white p-4">
          <div className="h-auto lg:h-[408px] w-full lg:w-[568px] bg-white">
            {/* First Line */}
            <div className="flex flex-wrap gap-4 lg:gap-4">
              <div className="h-[150px] w-full lg:w-[166px] bg-slate-50 hover:border hover:border-2 hover:border-black p-4">
                <img src={vectorLogo} alt="" className="mx-auto h-auto w-auto mt-5" />
                <p className="text-center text-sm mt-3 font-semibold">Certified</p>
                <p className="text-center text-sm font-semibold">translation and</p>
                <p className="text-center text-sm font-semibold">notarisation</p>
              </div>
              <div className="h-[150px] w-full lg:w-[166px] bg-slate-50 hover:border hover:border-2 hover:border-black p-4">
                <img src={HcomN2Img2} alt="" className="mx-auto h-auto w-auto mt-5" />
                <p className="text-center text-sm mt-3 font-semibold">Business document</p>
                <p className="text-center text-sm font-semibold">translation</p>
              </div>
              <div className="h-[150px] w-full lg:w-[166px] bg-slate-50 hover:border hover:border-2 hover:border-black p-4">
                <img src={Hcom2image3} alt="" className="mx-auto h-auto w-auto mt-5" />
                <p className="text-center text-sm mt-3 font-semibold">Personal document</p>
                <p className="text-center text-sm font-semibold">translation</p>
              </div>
            </div>

            {/* Second Line */}
            <div className="flex flex-wrap gap-4 lg:gap-4 mt-10">
              <div className="h-[150px] w-full lg:w-[166px] bg-slate-50 hover:border hover:border-2 hover:border-black p-4">
                <img src={Hcom2image21} alt="" className="mx-auto h-auto w-auto mt-5" />
                <p className="text-center text-sm mt-3 font-semibold">Website and apps</p>
                <p className="text-center text-sm font-semibold">translation and</p>
                <p className="text-center text-sm font-semibold">localisation</p>
              </div>
              <div className="h-[150px] w-full lg:w-[166px] bg-slate-50 hover:border hover:border-2 hover:border-black p-4">
                <img src={Hcomimage22} alt="" className="mx-auto h-auto w-auto mt-5" />
                <p className="text-center text-sm mt-3 font-semibold">Typesetting and</p>
                <p className="text-center text-sm font-semibold">copywriting</p>
                <p className="text-center text-sm font-semibold">documents</p>
              </div>
              <div className="h-[150px] w-full lg:w-[166px] bg-slate-50 hover:border hover:border-2 hover:border-black p-4">
                <img src={Hcom2image23} alt="" className="mx-auto h-auto w-auto mt-5" />
                <p className="text-center text-sm mt-3 font-semibold">Marketing</p>
                <p className="text-center text-sm font-semibold">translation and</p>
                <p className="text-center text-sm font-semibold">transcreation</p>
              </div>
            </div>

            {/* Third Line */}
            <div className="flex flex-wrap gap-4 lg:gap-4 mt-10">
              <div className="h-[150px] w-full lg:w-[166px] bg-slate-50 hover:border hover:border-2 hover:border-black p-4">
                <img src={Hcom2Image31} alt="" className="mx-auto h-auto w-auto mt-5" />
                <p className="text-center text-sm mt-3 font-semibold">Business specific</p>
                <p className="text-center text-sm font-semibold">translation</p>
              </div>
              <div className="h-[150px] w-full lg:w-[166px] bg-slate-50 hover:border hover:border-2 hover:border-black p-4">
                <img src={Hcom2Image32} alt="" className="mx-auto h-auto w-auto mt-5" />
                <p className="text-center text-sm mt-3 font-semibold">Legal document</p>
                <p className="text-center text-sm font-semibold">translation</p>
              </div>
              <div className="h-[150px] w-full lg:w-[166px] bg-slate-50 hover:border hover:border-2 hover:border-black p-4">
                <img src={HcomImage33} alt="" className="mx-auto h-auto w-auto mt-5" />
                <p className="text-center text-sm mt-3 font-semibold">Technical and IT</p>
                <p className="text-center text-sm font-semibold">translation</p>
              </div>
            </div>
          </div>
        </div>
        {/*End 2nd Component Home Page */}


      </div>
      {/*End 2nd Component Home Page */}

    {/* 3nd Component Home Page */}
    {/* <img src={Hcom3box1img} alt="" className="w-full h-auto mt-10" />
    <div className="relative  w-full h-auto">

    <img src={Hcom3box2img} alt="" className="w-full h-auto" /> 
    <div className="absolute inset-0 flex flex-col   text-white">
        <h1 className="text-4xl font-bold text-center">Translation Process</h1>
        
        <div className='flex'>
            <div>
                <img src={Hcom3box2img1} alt='' className=' top-[100px] h-[150px] w-[427px] left-60 p-[20px]  relative'></img>
                <img src={Hcom3box2img1} alt='' className='top-[150px] h-[150px] w-[427px] left-60 p-[20px]  relative'></img>
            </div>
            <div className="left-[400px] relative w-1  h-[600px] border-l-4 border-dotted border-[#FFFFFF] my-4"></div>
            <div className="relative  w-12 h-12 bg-[#3D65FF] rounded-full left-[377px] mt-10" style={{ top: '0%', backgroundImage: `url(${Hcom3HomeBgImg1})`, backgroundSize: 'cover',color:'white' }}></div>
            <div className="relative w-12 h-12 bg-[#3D65FF] rounded-full left-[325px] mt-10" style={{ top: '20%',backgroundImage: `url(${HcomHomeBgImg2})`, backgroundSize: '50%',color:'white',backgroundPosition:'center' ,backgroundRepeat:'no-repeat' }}></div>
            <div className="relative w-12 h-12 bg-[#3D65FF] rounded-full left-[280px]" style={{ top: '50%',backgroundImage: `url(${Hcom3HomeBgImg3})`, backgroundSize: '50%',color:'white',backgroundPosition:'center' ,backgroundRepeat:'no-repeat' }}></div>
            <div className="relative w-12 h-12 bg-[#3D65FF] rounded-full left-[230px]" style={{ top: '75%',backgroundImage: `url(${Hcom3HomeBgImg4})`, backgroundSize: '50%',color:'white',backgroundPosition:'center' ,backgroundRepeat:'no-repeat' }}></div>
            <div className='ml-[400px] '>
                <img src={Hcom3box2img1} alt='' className=' top-[250px] h-[150px] w-[427px]  p-[20px]  relative'></img>
                <img src={Hcom3box2img1} alt='' className='top-[300px] h-[150px] w-[427px]  p-[20px]  relative'></img>
            </div>
        </div>
        

    </div>

    </div>
    <img src={Hcom3box3img} alt="" className="w-full h-auto" /> */}

<div className="w-full h-auto mt-10">
  <img src={Hcom3box1img} alt="" className="w-full h-auto" />
  <div className="relative w-full h-auto">
    <img src={Hcom3box2img} alt="" className="w-full h-auto" /> 
    <div className="absolute inset-0 flex flex-col items-center text-white">
      <h1 className="text-4xl font-bold text-center">Translation Process</h1>
      <div className="flex flex-wrap justify-center items-start w-full relative">
        <div>
          <img src={Hcom3box2img1} alt='' className='h-[150px] w-[427px] p-[20px] relative top-40' />
          <img src={Hcom3box2img1} alt='' className='h-[150px] w-[427px] p-[20px] relative top-60' />
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[100px] w-1 h-[600px] border-l-4 border-dotted border-[#FFFFFF] my-4 gap-8 "></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[150px] w-12 h-12 bg-[#3D65FF] rounded-full mt-10" style={{ backgroundImage: `url(${Hcom3HomeBgImg1})`, backgroundSize: '50%', color: 'white', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[300px] w-12 h-12 bg-[#3D65FF] rounded-full mt-10" style={{ backgroundImage: `url(${HcomHomeBgImg2})`, backgroundSize: '50%', color: 'white', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[350px] w-12 h-12 bg-[#3D65FF] rounded-full mt-10" style={{ backgroundImage: `url(${Hcom3HomeBgImg3})`, backgroundSize: '50%', color: 'white', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[400px] w-12 h-12 bg-[#3D65FF] rounded-full mt-10" style={{ backgroundImage: `url(${Hcom3HomeBgImg4})`, backgroundSize: '50%', color: 'white', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
        <div>
          <img src={Hcom3box2img1} alt='' className='h-[150px] w-[427px] p-[20px] relative ml-20 top-60' />
          <img src={Hcom3box2img1} alt='' className='h-[150px] w-[427px] p-[20px] relative ml-20 top-80' />
        </div>
      </div>
    </div>
  </div>
  <img src={Hcom3box3img} alt="" className="w-full h-auto" />
</div>



    {/*End 3nd Component Home Page */}
    {/* 4th Component Home Page */}
      {/* <div className='flex justify-center'>
          <div className='w-[400px] h-[400px] bg-slate-50'>
            <div className='w-[294px] h-[102px] bg-white mt-10'>
              <h1 className='text-4xl texl-[#101D2E]'>Businesses love working with us</h1>
            </div>
            <div className='gap-20'>
              <img src={Hcom4Img1} alt='' className='mt-10'/>
              <img src={Hcom4Img2} alt='' className='mt-10'/>
            </div>
          </div>
          <div className='w-[570px] h-[600px] bg-slate-100 mt-5 ml-10 space-y-4 '>
            <img src={Hcome4Img21} alt='' className='h-[130px] w-[570px] hover:border-2 border-blue-500 ' />
            <img src={Hcom4Img22} alt='' className='h-[130px] w-[570px] hover:border-2 border-blue-500 ' />
            <img src={Hcom4Img23} alt='' className='h-[130px] w-[570px] hover:border-2 border-blue-500 '/>
            <img src={Hcom4Imge24} alt='' className='h-[130px] w-[570px] hover:border-2 border-blue-500'/>

          </div>
      </div> */}
      <div className='flex flex-col lg:flex-row justify-center'>
  <div className='w-full lg:w-[400px] h-auto lg:h-[400px] bg-slate-50 p-4 lg:p-0'>
    <div className='w-full lg:w-[294px] h-auto lg:h-[102px] bg-white mt-5 lg:mt-10 p-4 lg:p-0'>
      <h1 className='text-2xl lg:text-4xl text-[#101D2E]'>Businesses love working with us</h1>
    </div>
    <div className='flex flex-col gap-5 lg:gap-20 mt-5 lg:mt-0'>
      <img src={Hcom4Img1} alt='' className='mt-5 lg:mt-10'/>
      <img src={Hcom4Img2} alt='' className='mt-5 lg:mt-10'/>
    </div>
  </div>
  <div className='w-full lg:w-[570px] h-auto lg:h-[600px] bg-slate-100 mt-5 lg:mt-5 lg:ml-10 p-4 lg:p-0 space-y-4'>
    <img src={Hcome4Img21} alt='' className='h-auto lg:h-[130px] w-full lg:w-[570px] hover:border-2 border-blue-500' />
    <img src={Hcom4Img22} alt='' className='h-auto lg:h-[130px] w-full lg:w-[570px] hover:border-2 border-blue-500' />
    <img src={Hcom4Img23} alt='' className='h-auto lg:h-[130px] w-full lg:w-[570px] hover:border-2 border-blue-500'/>
    <img src={Hcom4Imge24} alt='' className='h-auto lg:h-[130px] w-full lg:w-[570px] hover:border-2 border-blue-500'/>
  </div>
</div>

    {/*End 4th Component Home Page */}

        {/* 5th Component Home Page */}
        {/* <div>
          <img src={Hcom5Img1} alt='' className='mt-10 w-[1660px]'/>
              <div className="absolute inset-0 flex flex-col items-center text-white">
                <h1 className='text-slate-50'>Success Stories</h1>
                </div>

        </div> */}
        <div className="relative">
          <img src={Hcom5Img1} alt='' className='mt-10 w-full lg:w-[1660px]' />
          <div className="absolute inset-0 flex flex-col items-center text-white">
           <h1 className='text-2xl lg:text-4xl text-slate-50 mt-10'>Success Stories</h1>
           <p className='mt-10'>Laoreet in volutpat elementum nisl at eget. Eu egestas scelerisque interdum id imperdiet viverra gravida sit scelerisque.</p>
            <p>Id consequat lorem praesent mauris. Dolor aenean eleifend etiam amet.</p>

            <div className="flex flex-wrap justify-center gap-5 my-10 mt-20">
              <h1  className="h-[66px] w-[177px] text-slate-50 " >Government  & NGO</h1>
              <h1  className="h-[66px] w-[177px] text-gray-50">Banking & Finance</h1>
              <h1 className="h-[66px] w-[177px] text-slate-50" >Travel & Leisure</h1>
              <h1 className="h-[66px] w-[177px] text-slate-50" >Legal</h1>
              <h1 className="h-[66px] w-[177px] text-slate-50" >Health</h1>
              <h1 className="h-[66px] w-[177px] text-slate-50" >Engineering</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-5 my-5 ">
              <div className='flex flex-wrap  gap-5 my-5  hover:border hover:border-2 hover:border-white'>
                <img src={Hcom5box1img1} alt='' className='h-[66px] w-[177px] hover:border hover:border-2 hover:border-white '/>
                <img src={Hcom5box2img2} alt='' className='h-[66px] w-[177px]  hover:border hover:border-2 hover:border-white'/>
                <img src={Hcom5box1img3} alt='' className='h-[66px] w-[177px]  hover:border hover:border-2 hover:border-white'/>
                <img src={Hcom5box1img4} alt='' className='h-[66px] w-[177px]  hover:border hover:border-2 hover:border-white'/>
                <img src={Hcom5box1img5} alt='' className='h-[66px] w-[177px] hover:border hover:border-2 hover:border-white'/>
                <img src={Hcom5box1img6} alt='' className='h-[66px] w-[177px] hover:border hover:border-2 hover:border-white'/>


              </div>

              <div className='flex flex-wrap  gap-5 my-5 hover:border hover:border-2 hover:border-white'>
                <img src={Hcom5box1img1} alt='' className='h-[66px] w-[177px] hover:border hover:border-2 hover:border-white'/>
                <img src={Hcom5box2img2} alt='' className='h-[66px] w-[177px] hover:border hover:border-2 hover:border-white'/>
                <img src={Hcom5box1img3} alt='' className='h-[66px] w-[177px] hover:border hover:border-2 hover:border-white'/>
                <img src={Hcom5box1img4} alt='' className='h-[66px] w-[177px] hover:border hover:border-2 hover:border-white'/>
                <img src={Hcom5box1img5} alt='' className='h-[66px] w-[177px] hover:border hover:border-2 hover:border-white'/>
                <img src={Hcom5box1img6} alt='' className='h-[66px] w-[177px] hover:border hover:border-2 hover:border-white'/>


              </div>
              <div className='flex flex-wrap  gap-5 my-5 hover:border hover:border-2 hover:border-white'>
                <img src={Hcom5box1img1} alt='' className='h-[66px] w-[177px] hover:border hover:border-2 hover:border-white'/>
                <img src={Hcom5box2img2} alt='' className='h-[66px] w-[177px] hover:border hover:border-2 hover:border-white'/>
                <img src={Hcom5box1img3} alt='' className='h-[66px] w-[177px] hover:border hover:border-2 hover:border-white'/>
                <img src={Hcom5box1img4} alt='' className='h-[66px] w-[177px] hover:border hover:border-2 hover:border-white'/>
                <img src={Hcom5box1img5} alt='' className='h-[66px] w-[177px] hover:border hover:border-2 hover:border-white'/>
                <img src={Hcom5box1img6} alt='' className='h-[66px] w-[177px] hover:border hover:border-2 hover:border-white'/>


              </div>
              <div className='flex flex-wrap  gap-2 my-1 hover:border hover:border-2 hover:border-white'>
                <img src={Hcom5box1img1} alt='' className='h-[66px] w-[177px] hover:border hover:border-2 hover:border-white'/>
                <img src={Hcom5box2img2} alt='' className='h-[66px] w-[177px] hover:border hover:border-2 hover:border-white'/>
                <img src={Hcom5box1img3} alt='' className='h-[66px] w-[177px] hover:border hover:border-2 hover:border-white'/>
                <img src={Hcom5box1img4} alt='' className='h-[66px] w-[177px] hover:border hover:border-2 hover:border-white'/>
                <img src={Hcom5box1img5} alt='' className='h-[66px] w-[177px] hover:border hover:border-2 hover:border-white'/>
                <img src={Hcom5box1img6} alt='' className='h-[66px] w-[177px] hover:border hover:border-2 hover:border-white'/>


              </div>

            </div>


         </div>
        </div>


        
        {/* end  5th Component Home Page */}
        {/*   6th Component Home Page */}
        <div>
          <img src={Hcom6img1} alt='' className='h-[116px] w-[766px] left-40 relative top-20' />
        </div>
        <div className='flex'>
          <div>
            <img src={Hcom6img2} alt=''  className='relative top-40 left-40'/>
          </div>
          <div>
          <img src={Hcom6img3} alt=''  className='relative top-40 left-96'/>

          </div>
        </div>
        {/* end  6th Component Home Page */}
        {/* 7th Component Home Page */}
         
  {/* <div className="relative ">
          <img src={Hcom7image1} alt="" className="w-full max-w-[1690px] mx-auto mt-10" />
      <div className="absolute inset-0 flex flex-col  items-start text-white text-4xl space-y-5 md:space-y-10 p-5 md:p-20">
        <h1 className="text-shadow-lg mt-[60px] text-5xl">Get In Touch</h1>
        <div className="text-sm md:text-base font-light space-y-2">
            <p className='text-[#FFFFFF]'>Lacus eu ultrices sagittis habitant. Etiam gravida </p> 
            <p className='text-[#FFFFFF]'>lacus leo vel. Nec viverra commodo at convallis faucibus amet.</p>
            <p className='text-[#FFFFFF]'> Aliquam a id aliquam pulvinar neque.</p>
        </div>
        <img src={Hcom7image2} alt='' />

        <button className="text-white bg-[#3D65FF] rounded-full mt-5 md:mt-10 text-sm h-[44px] w-[153px]">Send Message</button>

      </div>
  </div> */}

<div className="relative">
    <img src={Hcom7image1} alt="" className="w-full max-w-[1690px] mx-auto mt-40" />
    <div className="absolute inset-0 flex flex-row justify-start items-start text-white p-5 md:p-20 space-x-10">
        {/* <!-- First Column --> */}
        <div className="flex flex-col items-start text-4xl space-y-5 md:space-y-10 left-20 relative">
            <h1 className="text-shadow-lg mt-[60px] text-5xl">Get In Touch</h1>
            <div className="text-sm md:text-base font-light space-y-2">
                <p className="text-[#FFFFFF]">Lacus eu ultrices sagittis habitant. Etiam gravida</p> 
                <p className="text-[#FFFFFF]">lacus leo vel. Nec viverra commodo at convallis faucibus amet.</p>
                <p className="text-[#FFFFFF]">Aliquam a id aliquam pulvinar neque.</p>
            </div>
            <img src={Hcom7image2} alt="" />
            <button className="text-white bg-[#3D65FF] rounded-full mt-5 md:mt-10 text-sm h-[44px] w-[153px]">Send Message</button>
        </div>
        {/* <!-- Second Column --> */}
        <div className="flex flex-col items-start` text-4xl space-y-5 md:space-y-10 left-60 relative">
            <h1 className="text-shadow-lg mt-[60px] text-5xl">Tortor in ut nisi magna</h1>
            <div className="text-sm md:text-base font-light space-y-2">
                <p className="text-[#FFFFFF]">Eget dui varius semper vel viverra. Rhoncus felis tristique nisl eget</p> 
                <p className="text-[#FFFFFF]">ultricies semper vitae. Turpis porta maecenas quis felis tempus sed nis</p>
                <p className="text-[#FFFFFF]">risus sit. Nam viverra lobortis arcu justo netus quis fringilla sed lacus.</p>
            </div>
            <button className="text-white bg-[#3D65FF] rounded-full mt-5 md:mt-10 text-sm h-[44px] w-[153px]">Learn More</button>
            {/* first line */}
            <div className="flex flex-wrap gap-4 lg:gap-4">
              <div className="h-[150px] w-full lg:w-[166px]  hover:border hover:border-2 hover:border-black p-4">
                <img src={vectorLogo} alt="" className="mx-auto h-auto w-auto mt-5" />
                <p className="text-center text-sm mt-3 font-semibold text-white">Certified</p>
                <p className="text-center text-sm font-semibold text-white">translation and</p>
                <p className="text-center text-sm font-semibold text-white">notarisation</p>
              </div>
              <div className="h-[150px] w-full lg:w-[166px]  hover:border hover:border-2 hover:border-black p-4">
                <img src={HcomN2Img2} alt="" className="mx-auto h-auto w-auto mt-5" />
                <p className="text-center text-sm mt-3 font-semibold text-white">Business document</p>
                <p className="text-center text-sm font-semibold text-white">translation</p>
              </div>
              <div className="h-[150px] w-full lg:w-[166px]  hover:border hover:border-2 hover:border-black p-4">
                <img src={Hcom2image3} alt="" className="mx-auto h-auto w-auto mt-5" />
                <p className="text-center text-sm mt-3 font-semibold text-white">Personal document</p>
                <p className="text-center text-sm font-semibold text-white">translation</p>
              </div>
            </div>
            {/* second line */}
            <div className="flex flex-wrap gap-4 lg:gap-4">
              <div className="h-[150px] w-full lg:w-[166px]  hover:border hover:border-2 hover:border-black p-4">
                <img src={vectorLogo} alt="" className="mx-auto h-auto w-auto mt-5 " />
                <p className="text-center text-sm mt-3 font-semibold text-white">Certified</p>
                <p className="text-center text-sm font-semibold text-white">translation and</p>
                <p className="text-center text-sm font-semibold text-white">notarisation</p>
              </div>
              <div className="h-[150px] w-full lg:w-[166px]  hover:border hover:border-2 hover:border-black p-4">
                <img src={HcomN2Img2} alt="" className="mx-auto h-auto w-auto mt-5" />
                <p className="text-center text-sm mt-3 font-semibold text-white">Business document</p>
                <p className="text-center text-sm font-semibold text-white">translation</p>
              </div>
              <div className="h-[150px] w-full lg:w-[166px]  hover:border hover:border-2 hover:border-black p-4">
                <img src={Hcom2image3} alt="" className="mx-auto h-auto w-auto mt-5" />
                <p className="text-center text-sm mt-3 font-semibold text-white">Personal document</p>
                <p className="text-center text-sm font-semibold text-white">translation</p>
              </div>
            </div>


        </div>
    </div>
</div>


{/* end  7th Component Home Page */}
{/* < Footer/> */}
{/*   8th Component Home Page */}

    
  
    <div>
         
              
              
  

               {/* first line */}
            
            
        </div>
    {/* </div> */}
   
    
  
  
{/* end  8th Component Home Page */}
















               
    </>
  );
}

export default Home;
