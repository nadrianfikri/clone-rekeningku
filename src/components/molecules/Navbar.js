// import Button from '../atoms/Button';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import { NavItem, NavLogo } from '../atoms/NavItems';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full px-4 md:px-10 lg:px-20 py-4 border-b border-slate-100 font-serif">
      <section className="flex justify-center items-center space-x-14">
        <NavLogo />
        <div className="space-x-8">
          <NavItem to="/" text="Markets" />
          <NavItem to="/" text="Exchange" />
          <NavItem to="/" text="Wallet" />
        </div>
      </section>
      <section className="flex justify-center items-center space-x-12">
        <div className="flex space-x-2 items-center">
          <p className="text-stone-500 hover:text-stone-700">Bahasa Indonesia</p>
          <FontAwesomeIcon icon={faCaretDown} className="text-stone-600 transition-all" />
        </div>
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-stone-500 hover:text-primary transition-all">
            Masuk
          </Link>
          <Link to="/" className="text-white  bg-primary px-6 py-[6px] rounded hover:bg-blue-600 transition-all">
            Daftar
          </Link>
          <button>
            <FontAwesomeIcon icon={faMoon} className="text-stone-400 hover:text-amber-500 text-xl transition-all" />
          </button>
        </div>
      </section>
    </nav>
  );
}
