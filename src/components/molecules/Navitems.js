import { NavItem } from '../atoms/NavItems';

function Navitems() {
  const navItem = [
    {
      endpoint: '/markets',
      text: 'Markets',
    },
    {
      endpoint: '/trade',
      text: 'Exchange',
    },
    {
      endpoint: '/wallet',
      text: 'Wallet',
    },
  ];

  return (
    <div className="space-x-8">
      {navItem.map((item, index) => (
        <NavItem key={index} to={item.endpoint} text={item.text} />
      ))}
    </div>
  );
}

export default Navitems;
