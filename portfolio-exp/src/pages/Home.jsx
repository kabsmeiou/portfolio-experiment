import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className='w-full h-screen overflow-hidden' style={{backgroundColor: '#EDEDED'}}>
        <div className='flex flex-1 mt-12'>
            <div className='flex h-screen w-6/12 items-center justify-center'>
                <div className='relative h-36r w-36r resize-effect cursor-pointer'>
                    <div className='relative h-90p w-90p' style={{backgroundColor: '#171717'}}></div>
                    <div className='absolute bottom-0 right-0 h-90p w-90p bg-temp-image bg-center bg-cover'></div>
                </div>
            </div>
            <div className='rounded mt-auto mb-auto h-42r border-black border-2 overflow-hidden'></div>
            <div className='flex w-6/12 items-center justify-center overflow-hidden'>
                <div className='h-fit me-2'>
                    <div className='text-5xl font-bold w-fit text-shadow-lg'>Hello,</div>
                    <div className='text-6xl font-extrabold my-2 w-fit text-shadow-lg'>Welcome to my Website!</div>
                    <Link to='about'><div className='text-xl font-bold w-fit text-shadow-lg cursor-pointer hover:text-2xl duration-150'>Click here to continue &raquo;</div></Link>
                </div>
            </div>
        </div>
      </div>
    </>
  )
};

export default Home;
// import { useState } from 'react'
// import './App.css'
// import Particles from 'react-particles';
// import { useCallback } from "react";
// import { loadSlim } from "tsparticles-slim";

// function HeaderNavigation({navigateTo}) {
//     return (
//         <>
//         <div className='text-lg text-white font-bold text-glow cursor-pointer'>
//             {navigateTo}
//         </div>
//         </>
//     );
// }

// export default function App() {
//   const [count, setCount] = useState(0)
  
//   const particlesInit = useCallback(async engine => {
//     console.log(engine);
//     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//     // starting from v2 you can add only the features you need reducing the bundle size
//     //await loadFull(engine);
//     await loadSlim(engine);
//   }, []);

//   const particlesLoaded = useCallback(async container => {
//       await console.log(container);
//   }, []);

//   return (
//     <>

//     </>
//   )
// }