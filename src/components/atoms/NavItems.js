import { Link, NavLink } from 'react-router-dom';

function NavLogo() {
  return (
    <Link to="/" className="text-logo font-bold font-sans">
      Rekeningku
    </Link>
  );
}
function NavItem(props) {
  return (
    <NavLink to={props.to} style={({ isActive }) => (isActive ? { color: '#197cf1' } : undefined)} className={`${props.className} group text-stone-500  hover:text-stone-700 text-base font-serif font-semibold transition-all `}>
      {props.text}
    </NavLink>
  );
}

export { NavLogo, NavItem };
