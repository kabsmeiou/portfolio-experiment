import React from 'react';

const HeaderNavigation = ({ navigateTo }) => {
  return (
      <div className='text-lg text-white font-bold text-glow cursor-pointer'>
        {navigateTo}
      </div>
  );
};

export default HeaderNavigation;