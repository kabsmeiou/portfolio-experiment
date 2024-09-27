import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Projects from '../components/Projects';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import PageFooter from '../components/PageFooter';

// icons
import css from "../assets/icons8-css-48.png"
import python from "../assets/icons8-python-48.png"
import django from "../assets/icons8-django-48.png"
import spring from "../assets/icons8-spring-boot-48.png"
import postgresql from "../assets/icons8-postgresql-48.png"
import java from "../assets/icons8-java-48.png"
import oracle from "../assets/icons8-oracle-48.png"
import html from "../assets/icons8-html-48.png"
import react from "../assets/icons8-react-48.png"
import tailwind from "../assets/icons8-tailwind-css-48.png"
import numpy from "../assets/icons8-numpy-48.png"
import pandas from "../assets/icons8-pandas-48.png"
import cpp from "../assets/icons8-c++-48.png"

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
      title: 'Tales of A Random Human',
      description: 'a personal notebook created with Django REST Framework and React.js.',
      techStack: [
        {image: python, name: "Python" }, 
        {image: django, name: "Django REST framework" }, 
        {image: react, name: "ReactJS" },
        {image: tailwind, name: "Tailwind CSS" }, 
        {image: postgresql, name: "PostgreSQL" }, 
      ],
      projectLink: 'https://github.com/kabsmeiou/notebook'
    },
    {
      title: 'RF Model for Car Prices',
      description: 'A simple Random Forest Regression machine learning model to predict car prices. The dataset used is from a Kaggle competition. This served as a practice for important machine learning libraries such as pandas, scikit-learn, NumPy, mMtplotlib, and seaborn.',
      techStack: [
        {image: python, name: "Python" }, 
        {image: pandas, name: "pandas" }, 
        {image: numpy, name: "NumPy" },
      ],
      projectLink: 'https://github.com/kabsmeiou/ml-zoomcamp/blob/main/Jupyter%20Notebook/Lecture%202/Car%20Prices.ipynb'
    },
    {
      title: 'Book Manager',
      description: 'A personal project for managing the books to read and have read. It served as a practice for the basic interactions with a database and backend development.',
      techStack: [
        {image: java, name: "Java" }, 
        {image: spring, name: "Spring Boot" }, 
        {image: oracle, name: "Oracle" },
        {image: html, name: "HTML" }, 
        {image: css, name: "Cascading Style Sheets" }
      ],
      projectLink: 'https://github.com/kabsmeiou/Snake-Game'
    },
    {
      title: 'Competitive Programming Repository',
      description: 'Solved different kinds of problems ranging from data structures, combinatorics, number theory, constructive algorithms, and many more. Currently a Pupil in Codeforces.',
      techStack: [
        {image: cpp, name: "C++" }, 
      ],
      projectLink: 'https://github.com/kabsmeiou/ml-zoomcamp/blob/main/Jupyter%20Notebook/Lecture%202/Car%20Prices.ipynb'
    },
    {
      title: 'Console Playlist Manager',
      description: 'A playlist manager implemented with Java. Proper documentation and appropriate use of data structures were practiced with this project.',
      techStack: [
        {image: java, name: "Java" }, 
      ],
      projectLink: 'https://github.com/kabsmeiou/my-book-manager'
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
        <div className='text-5xl font-extrabold my-8 mx-auto w-fit glow text-white no-select'>Portfolio</div>
      </div> 
      <div className="rounded h-1 w-70p mx-auto border-white border-2 shadow-glow-subtle"></div> 
      <div className="flex overflow-x-auto h-screen w-70p mx-auto mt-1">
        <motion.div className="flex space-x-12 py-4 px-2"
          drag="x"
          dragConstraints={{ left: -1 * (projects.length * 220), right: 0 }} // Adjust based on number of cards
          whileTap={{ cursor: 'grabbing' }}
        >
          {
            projects.map((project, index) => (
              <Projects
                key={index}
                projectTitle={project.title}
                projectDescription={project.description}
                projectTechStack={project.techStack}
                githubLink={project.projectLink}
              />
            ))
          }
        </motion.div>
      </div>
      </motion.div>
    </div>
    <PageFooter></PageFooter>
  </>
  
  )
};

export default Portfolio;