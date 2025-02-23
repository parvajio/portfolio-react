import profile2 from '/images/blwtp2.png';
import graph1 from '/images/graph.png';
import Rellax from 'rellax';
import { useEffect } from 'react';


const Home = () => {

  useEffect(() => {
    var rellax = new Rellax('.rellax', {
      speed: -2,

    });

    return () => {
      rellax.destroy();
    };

  }, [])

  return (
    <div className="relative max-h-screen h-screen overflow-hidden">

      {/* <div className='absolute -bottom-20 -left-20 opacity-50 rellax' data-rellax-speed="-10">
        <img  src={graph1} alt="" />
      </div> */}

      {/* Section for text and title */}
      <div className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center h-[40vh] lg:h-[80vh] z-10 mx-5 lg:mx-0">
        <div className='w-full mb-16'>
          <div className="lg:text-xl font-thin">Hi, I’m Md. <span className="lg:text-3xl text-xl font-bold font-['Yeseva One', 'serif']">PARVAJ</span> Mosharof, a</div>
          <div className='text-2xl lg:text-4xl font-bold -mb-12 lg:mt-5 ml-7 opacity-80'>
            WEB
          </div>
        </div>
        <div className="uppercase lg:text-[10rem] text-6xl font-extrabold flex items-center justify-center relative">
          {/* DEVELOPER text behind the image */}

          <span className="absolute opacity-60 z-0 rellax " data-rellax-speed="10">

            Developer
          </span>
        </div>

        <div className="absolute text-xs right-8 lg:top-[60vh] top-[32vh] lg:text-center text-right lg:text-sm font-light w-96">
        Crafting 
          <span className="lg:text-xl font-bold font-['Yeseva One', 'serif']"> Modern, High-Performance & Scalable </span>Web Solutions with <span className="lg:text-xl font-bold font-['Yeseva One', 'serif']">Next.js </span>
         <br /> &  <span className='font-bold'>Modern Technologies.</span>
        </div>
      </div>

      {/* Profile Image */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-full flex justify-center" >
        <img className="lg:h-[80vh] h-[60vh] w-auto max-w-full object-cover rellax" data-rellax-speed="-8" src={profile2} alt="Profile" />
      </div>

    </div>
  );
};

export default Home;
