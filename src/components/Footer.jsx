import React from 'react'

function Footer() {
  return (
    <div className='flex w-full h-216px bg-black justify-center items-center'>
      <div className='flex flex-col items-center'>
        <div className='text-white m-2 font-bold'>Connect with Me</div>
        <div className='flex items-center h-64p w-256'>
          <a href='https://github.com/kabsmeiou' className='bg-git bg-cover h-16 w-16 hover:h-4.2 hover:w-4.2 duration-150'></a>
          <a href='https://www.facebook.com/kabsmeiou.chopin' className='bg-facebook bg-cover h-16 w-16 hover:h-4.2 hover:w-4.2 duration-150'></a>
          <a href='https://github.com/kabsmeiou' className='bg-gmail bg-cover h-16 w-16 hover:h-4.2 hover:w-4.2 duration-150'></a>
          <a href='https://www.linkedin.com/in/christian-vincent-cabral-25530a258/' className='bg-linkedin bg-cover h-16 w-16 hover:h-4.2 hover:w-4.2 duration-150'></a>
        </div>
        <div className='text-white mt-12 text-xs'>COPYRIGHT &#169; Christian Cabral. All rights reserved</div>
      </div>
    </div>
  )
}

export default Footer