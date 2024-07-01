import { Outlet, Link } from "react-router-dom";
import HeaderNavigation from '../components/HeaderNavigation';

const Layout = () => {
  return (
    <>
      <nav>
        <div className='flex gap-x-12 justify-center items-center custom-header w-full' style={{backgroundColor: '#171717'}}>
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