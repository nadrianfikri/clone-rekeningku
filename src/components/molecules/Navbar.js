// import Button from '../atoms/Button';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import { NavLogo } from '../atoms/NavItems';
import Navitems from './Navitems';
import { LeftSide, RightSide } from '../atoms/NavContainer';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full px-4 md:px-10 lg:px-20 py-4 border-b border-slate-100 font-serif">
      <LeftSide>
        <NavLogo />
        <Navitems />
      </LeftSide>
      <RightSide>
        <div className="flex space-x-2 items-center">
          <p className="text-stone-500 hover:text-stone-700">Bahasa Indonesia</p>
          <FontAwesomeIcon icon={faCaretDown} className="text-stone-600 transition-all" />
        </div>
        <div className="flex items-center space-x-6">
          <Link to="/signin" className="text-stone-500 hover:text-primary transition-all">
            Masuk
          </Link>
          <Link to="/signup" className="text-white  bg-primary px-6 py-[6px] rounded hover:bg-blue-600 transition-all">
            Daftar
          </Link>
          <button>
            <FontAwesomeIcon icon={faMoon} className="text-stone-400 hover:text-amber-500 text-xl transition-all" />
          </button>
        </div>
      </RightSide>
    </nav>
  );
}
