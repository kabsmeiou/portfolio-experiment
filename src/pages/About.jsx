import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import PageFooter from '../components/PageFooter';

const About = () => {
  return (
    <>
    <div className='w-full h-screen overflow-hidden' >
      <motion.div className='flex flex-col mt-108px'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        
        style={{backgroundColor: '#EDEDED'}}
      >
        <div className="flex flex-col h-screen w-full">
          <div className="h-fit mt-5">
            <div className='text-5xl font-extrabold my-8 mx-auto w-fit text-shadow-lg no-select'>Who am I?</div>
          </div>
          <div className="rounded h-1 w-70p mx-auto border-black border-2"></div> 
          <div className="flex flex-1 h-screen mx-auto w-70p mt-12">
            <div className='h-screen w-3/6'>
              <div className='h-screen ms-20'>
                <div className='text-5xl font-black w-fit text-shadow-sm tracking-wider no-select'>I am Christian Cabral</div>
                <div className='text-lg w-fit text-shadow-sm mt-4 me-12 text-justify tracking-wide overflow-hidden text-content no-select'>
                  A 3rd Year Computer Science student in Ateneo de Naga University. I am an INTJ. I enjoy problem-solving, which is why I participate in competitive programming competitions quite often. My hobbies include coding, playing the piano, playing video games (mainly FPS and RPG), reading books, playing sports, and many more. One thing I like about myself is my ability to manage my time effectively. Right now, I am learning about Data and Machine Learning. I am aspiring to be a great Machine Learning Engineer / Data Scientist in the future!
                </div>
                <Link to='/portfolio'><div className='text-xl mt-4 font-bold w-fit text-shadow-lg cursor-pointer hover:text-2xl duration-150'>See my works &raquo;</div></Link>
              </div>
            </div>
            <div className='h-screen w-3/6'>
              <div className='relative h-32r w-32r resize-effect-2 cursor-pointer mx-auto overflow-hidden'>
                <div className='absolute bottom-0 right-0 h-90p w-90p' style={{backgroundColor: '#171717'}}></div>
                <div className='relative h-90p w-90p bg-temp-image bg-[20%_center] bg-cover' ></div>
              </div>  
            </div>
          </div> 
        </div>
      </motion.div>
    </div>
    <PageFooter></PageFooter>
    </>
  )
};

export default About;