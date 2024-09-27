import React from 'react'
import { motion } from 'framer-motion'

const icons = [
  { key: "python", value: "../" },
  { key: "java", value: "25" },
  { key: "postgresql", value: "New York" }, 
  { key: "oracle", value: "New York" },
  { key: "django", value: "John Doe" },
  { key: "spring", value: "25" },
  { key: "c++", value: "New York" }, 
  { key: "html", value: "New York" },
  { key: "css", value: "New York" }
];

function Projects({projectTitle, projectDescription, projectTechStack, githubLink}) {
  return (
    <>
      <motion.div className="flex-shrink-0 h-70p w-96 bg-white rounded shadow-glow-subtle">
            <div className="border-black border-b-2 w-96">
              <h3 className='text-xl font-extrabold w-fit font-bold mx-auto p-1'>{projectTitle}</h3>
            </div>
            <div className='h-2/5 overflow-y-auto p-2 shadow-inner m-2 rounded'>
              <p className='m-2 font-bold text-lg text-shadow-lg'>Project Description</p>
              <p className='m-2 text-justify text-normal'> 
                {projectDescription}
              </p>
            </div>
            <div className='flex h-2/5 p-2 rounded shadow-inner m-2'>
              <div className='flex flex-col items-center w-full m-2 font-bold text-lg overflow-y-auto'>
                <p className='text-shadow-lg'>Skills</p>
                <div className='w-full flex flex-wrap justify-center max-w-full gap-x-5 gap-y-4 mt-4'>
                {projectTechStack.map((tech, index) => (
                  <div className='relative group' key={index}>
                    <div className='bg-[#EDEDED] rounded p-1 z-0'>
                      <div
                        className='w-[48px] h-[48px] bg-cover z-0'
                        style={{ backgroundImage: `url(${tech.image})` }}
                      ></div>
                    </div>
                    <div className='absolute left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 z-10'>
                      {tech.name}
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
            <div className='h-20 p-2 flex items-center'>
              <p className='m-2 text-sm overflow-x-auto'>Check it out at <a href={githubLink} style={{fontWeight: '600', textDecoration: 'underline'}}>Github</a></p>
            </div>
      </motion.div>
    </>
  )
}

export default Projects