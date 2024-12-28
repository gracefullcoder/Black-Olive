import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline, searchOutline, bagHandleOutline, personOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed w-full bg-white z-10 shadow-md">
      <div className="flex justify-between px-6 md:px-12 lg:px-32 py-4 items-center">

        <div>
          <Link to="/" className="text-xl font-bold">
            <img src={Logo} alt="" className='h-12 w-12'/>
          </Link>
        </div>

        <div className="hidden lg:flex gap-8">
          <nav className="flex gap-6 list-none">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/salads">SALAD</Link></li>
            <li><Link to="/membership">MEMBERSHIP</Link></li>
            <li><Link to="/customize">CUSTOMIZE</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </nav>
        </div>

        <div>
          <ul className='flex gap-6 text-2xl list-none'>
            {/* <li className='cursor-pointer'>
              <IonIcon icon={searchOutline} />
            </li>
            <li className='cursor-pointer'>
              <IonIcon icon={bagHandleOutline} />
            </li>
            <li className='cursor-pointer'>
              <IonIcon icon={personOutline} />
            </li> */}
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
            <li><Link to="/" onClick={toggleMenu}>HOME</Link></li>
            <li><Link to="/salads" onClick={toggleMenu}>SALAD</Link></li>
            <li><Link to="/membership" onClick={toggleMenu}>MEMBERSHIP</Link></li>
            <li><Link to="/customize" onClick={toggleMenu}>CUSTOMIZE</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>CONTACT</Link></li>
          </nav>
        </div>
      )}

    </header>
  );
}

export default Navbar;

