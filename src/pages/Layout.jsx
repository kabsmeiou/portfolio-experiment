import { Outlet, Link, useLocation } from "react-router-dom";
import HeaderNavigation from '../components/HeaderNavigation';
import Footer from "../components/Footer";

const Layout = () => {
  const location = useLocation();
  const colorScheme = location.pathname === '/portfolio' ? '#EDEDED' : '#171717';
  return (
    <>
      <nav>
        <div className='flex gap-x-12 justify-center items-center custom-header w-full' style={{backgroundColor: colorScheme}}>
          <Link to='/'><HeaderNavigation navigateTo='Home'/></Link>
          <Link to='about'><HeaderNavigation navigateTo='About Me'/></Link>
          <Link to='portfolio'><HeaderNavigation navigateTo='Portfolio'/></Link>
        </div>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;