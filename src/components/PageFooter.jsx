import React from 'react'
import { useLocation } from 'react-router-dom';
import github from "../assets/icons8-github-48.png"
import linkedin from "../assets/icons8-linkedin-48.png"
import facebook from "../assets/icons8-facebook-48.png"

function PageFooter() {
  const location = useLocation();
  const footerBackgroundColor = location.pathname === '/portfolio' ? 'bg-bgwhite' : 'bg-bgblack';
  return (
    <div className={'flex flex-col  pageFooter justify-center items-center z-50 ' + footerBackgroundColor}>
      <div className='flex gap-2 my-4 '>
        <div className='font-bold'>Other Links</div>
      </div> 
      <div className='flex gap-4'>
        <a href='https://github.com/kabsmeiou'>
          <div className='w-[48px] h-[48px] bg-cover z-0' style={{ backgroundImage: `url(${github})` }}></div>
        </a>
        <a href='https://www.linkedin.com/in/christian-vincent-cabral-25530a258/'>
          <div className='w-[48px] h-[48px] bg-cover z-0' style={{ backgroundImage: `url(${linkedin})` }}></div>
        </a>
        <a href='https://www.facebook.com/kabsmeiou.chopin'>
          <div className='w-[48px] h-[48px] bg-cover z-0' style={{ backgroundImage: `url(${facebook})` }}></div>
        </a>
      </div>
    </div>
  )
}

export default PageFooter;