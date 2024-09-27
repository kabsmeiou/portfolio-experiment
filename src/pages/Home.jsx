import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageFooter from '../components/PageFooter';

const Home = () => {
  const [isClicked, setClicked] = useState(false);
  return (
    <>
      <div className='w-full h-screen overflow-hidden' >
        <motion.div className='flex flex-1 mt-12'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          style={{backgroundColor: '#EDEDED'}}
        >
            <div className='flex h-screen w-6/12'>
                <div className='relative my-auto mx-auto h-36r w-36r resize-effect cursor-pointer'>
                    <div className='relative h-90p w-90p' style={{backgroundColor: '#171717'}}></div>
                    <div className='absolute bottom-0 right-0 h-90p w-90p bg-temp-image bg-[20%_center] bg-cover'></div>
                </div>
            </div>
            <div className='rounded my-auto h-42r border-black border-2'></div>
            <div className='flex w-6/12 my-auto items-center justify-center overflow-hidden'>
                <div className='h-fit me-2'>
                    <div className='text-5xl font-bold w-fit text-shadow-lg no-select'>Hello,</div>
                    <div className='text-6xl font-extrabold my-2 w-fit text-shadow-lg no-select'>Welcome to my Website!</div>
                    <Link to='about'><div className='text-xl font-bold w-fit text-shadow-lg cursor-pointer hover:text-2xl duration-150'>Click here to continue &raquo;</div></Link>
                </div>
            </div>
        </motion.div>
      </div>
      <PageFooter></PageFooter>
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