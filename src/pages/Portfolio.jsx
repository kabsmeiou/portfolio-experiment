import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Projects from '../components/Projects';
import Footer from '../components/Footer';
const Portfolio = () => {
  // const [ init, setInit ] = useState(false);

  // // this should be run only once per application lifetime
  // useEffect(() => {
  //     initParticlesEngine(async (engine) => {
  //         // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
  //         // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //         // starting from v2 you can add only the features you need reducing the bundle size
  //         //await loadAll(engine);
  //         //await loadFull(engine);
  //         await loadSlim(engine);
  //         //await loadBasic(engine);
  //     }).then(() => {
  //         setInit(true);
  //     });
  // }, []);

  // const particlesLoaded = (container) => {
  //     console.log(container);
  // };

  const projects = [
    {
      title: 'BookDB',
      description: 'This is the description for project 1.',
      techStack: ['Java', 'Spring', 'Oracle'],
      learnings: ['CRUD', 'Java Annotations', 'Java Spring and Database Management'],
      projectLink: 'https://github.com/kabsmeiou/Snake-Game'
    },
    {
      title: 'ByteHub',
      description: 'This is the description for project 2.',
      techStack: ['Python', 'Django', 'PostgreSQL'],
      learnings: ['Django Framework', 'Database Management', 'HTTP Methods'],
      projectLink: 'https://github.com/kabsmeiou/Bytehub'
    },
  ];

  return (
  <>
    <div className='w-full h-screen overflow-hidden'  style={{backgroundColor: '#171717'}}>
      <motion.div className='flex flex-col mt-108px'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.3}}
      >          
      {/* { init && <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            className='particles'
            options={{
                background: {
                    color: {
                        value: "#000",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
      } */}
      <div className="h-fit mt-5">
        <div className='text-5xl font-extrabold my-8 mx-auto w-fit glow text-white no-select'>My Works</div>
      </div> 
      <div className="rounded h-1 w-70p mx-auto border-white border-2 shadow-glow-subtle"></div> 
      <div className="flex overflow-x-auto h-screen w-70p mx-auto mt-1">
        <motion.div className="flex space-x-12 py-4 px-2"
          drag="x"
          dragConstraints={{ left: -1 * (1 * 220), right: 0 }} // Adjust based on number of cards
          whileTap={{ cursor: 'grabbing' }}
        >
          {projects.map((project, index) => (
            <Projects
              key={index}
              projectTitle={project.title}
              projectDescription={project.description}
              projectTechStack={project.techStack}
              projectLearnings={project.learnings}
              githubLink={project.projectLink}
            />
          ))}
        </motion.div>
      </div>
      </motion.div>
    </div>
    <Footer></Footer>
  </>
  )
};

export default Portfolio;