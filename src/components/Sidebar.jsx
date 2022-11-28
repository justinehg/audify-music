import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';

import { logo } from '../assets';
import { links } from '../assets/constants';


const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
    <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-gradient-to-br from-[#000001] to-[#04001c]">
      <img src={logo} alt="logo" className="w-full h-23 object-contain"/>

    </div>
    </>
  )
    
};

export default Sidebar;

// 1:09:02