import React from 'react';
import { useLocation } from "react-router-dom";

const HeaderNavigation = ({ navigateTo }) => {
  const location = useLocation();
  const navColor = location.pathname === '/portfolio' ? 'black' : 'white';
  const textGlowClass = location.pathname === '/portfolio' ? 'text-glow-portfolio' : 'text-glow';

  return (
      <div className={'text-lg font-bold cursor-pointer ' + textGlowClass} style={{color: navColor}}>
        {navigateTo}
      </div>
  );
};

export default HeaderNavigation;