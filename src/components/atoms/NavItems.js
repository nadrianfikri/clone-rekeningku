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
    <NavLink activeClassName="text-primary" to={props.to} className={`${props.className} group text-stone-500  hover:text-stone-700 text-base font-serif font-semibold transition-all `}>
      {props.text}
    </NavLink>
  );
}

export { NavLogo, NavItem };
