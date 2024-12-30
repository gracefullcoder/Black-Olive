import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline } from 'ionicons/icons';
import { searchOutline, bagHandleOutline, personOutline } from 'ionicons/icons';

import { NavLink } from 'react-router-dom';
import Logo from "../assets/logo.png"
import { useCartContext } from '../context/CartContext';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const navLinkStyle = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? "text-green-600 font-bold border-b-2 border-white duration-300"
      : "text-black hover:text-green-700 ";
  };

  const { items, setIsOpen } = useCartContext();



  return (
    <header className="fixed w-full bg-white z-10 shadow-md">
      <div className="flex justify-between px-6 md:px-12 lg:px-32 py-4 items-center">

        <div>
          <NavLink to="/" className="text-xl font-bold">
            <img src={Logo} alt="" className='h-12 w-12' />
          </NavLink>
        </div>

        <div className="hidden lg:flex gap-8">
          <nav className="flex gap-6 list-none">
            <li><NavLink to="/" className={navLinkStyle}>HOME</NavLink></li>
            <li><NavLink to="/salads" className={navLinkStyle}>SALAD</NavLink></li>
            <li><NavLink to="/membership" className={navLinkStyle}>MEMBERSHIP</NavLink></li>
            {/* <li><NavLink to="/customize" className={navLinkStyle}>CUSTOMIZE</NavLink></li> */}
            <li><NavLink to="/contact" className={navLinkStyle}>CONTACT</NavLink></li>
          </nav>
        </div>

        <div>
          <ul className='flex gap-6 text-2xl list-none'>
            <li className='cursor-pointer'>
              <IonIcon icon={searchOutline} />
            </li>
            <li className='cursor-pointer relative'>
              <IonIcon icon={bagHandleOutline} onClick={() => setIsOpen((p) => !p)} />
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {items.length}
              </span>
            </li>
            <li className='cursor-pointer'>
              <IonIcon icon={personOutline} />
            </li>
            <li>
              <div className="lg:hidden text-2xl cursor-pointer">
                <IonIcon icon={menuOpen ? closeOutline : menuOutline} onClick={toggleMenu} />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden px-6 py-4 bg-white shadow-md">
          <nav className="flex flex-col gap-4 list-none">
            <li className='hover:font-bold'><NavLink to="/" onClick={toggleMenu}>HOME</NavLink></li>
            <li className='hover:font-bold'><NavLink to="/salads" onClick={toggleMenu}>SALAD</NavLink></li>
            <li className='hover:font-bold'><NavLink to="/membership" onClick={toggleMenu}>MEMBERSHIP</NavLink></li>
            {/* <li className='hover:font-bold'><NavLink to="/customize" onClick={toggleMenu}>CUSTOMIZE</NavLink></li> */}
            <li className='hover:font-bold'><NavLink to="/contact" onClick={toggleMenu}>CONTACT</NavLink></li>
          </nav>
        </div>
      )}

    </header>
  );
}

export default Navbar;

