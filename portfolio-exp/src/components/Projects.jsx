import React from 'react'
import { motion } from 'framer-motion'

function Projects({projectTitle, projectDescription, projectTechStack, projectLearnings, githubLink}) {
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
              <div className='w-3/6 m-2 font-bold text-lg overflow-y-auto'>
                <p className='text-shadow-lg'>Tech Stack</p>
                <ul>
                  {projectTechStack.map((tech, index) => (
                    <li key={index}>{index + 1}. {tech}</li>
                  ))}
                </ul>
              </div>
              <div className='w-3/6 m-2 font-bold text-lg overflow-y-auto'>
                <p className='text-shadow-lg'>What I learned</p>
                <ul>
                  {projectLearnings.map((skill, index) => (
                    <li key={index}>{index + 1}. {skill}</li>
                  ))}
                </ul>
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