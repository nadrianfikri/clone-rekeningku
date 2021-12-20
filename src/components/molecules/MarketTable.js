import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '../atoms/Direction';
import { SortButton } from '../atoms/Button';
import CoinPair from '../atoms/CoinPair';
import { NavLink } from 'react-router-dom';

function MarketTable(props) {
  return <Col className="w-full overflow-auto">{props.children}</Col>;
}
export const MarketTableData = (props) => {
  return (
    <div className="relative">
      <FontAwesomeIcon className="absolute top-[6px] left-2 text-gray-300 mr-[2px] z-10 cursor-pointer" icon={faStar} onClick={props.onToggle} />
      <NavLink to={props.to} style={({ isActive }) => (isActive ? { backgroundColor: '#197cf120' } : undefined)} className={`flex py-1 px-2 gap-1 items-center w-full text-[11px]  hover:bg-stone-100`}>
        <NavLink to={props.to} className="pl-6 flex w-full justify-between ">
          <CoinPair logo={props.logo} code={props.code} />
          <p className="text-right flex-1 ">{props.price}</p>
          <p className={`w-16 text-right ${props.percent > 0 ? 'text-green' : props.percent < 0 ? 'text-danger' : 'text-black'}`}>{props.percent}%</p>
        </NavLink>
      </NavLink>
    </div>
  );
};
export const FavoriteCoin = (props) => {
  return (
    <Row className="py-1 px-2 gap-1 items-center w-full text-[11px]  hover:bg-stone-100">
      <FontAwesomeIcon className="text-yellow-400 mr-[2px] z-10 cursor-pointer" icon={faStar} onClick={props.onToggle} />
      <NavLink to={props.to} className=" flex w-full justify-between  ">
        <CoinPair logo={props.logo} code={props.code} />
        <p className="text-right flex-1 ">{props.price}</p>
        <p className={`w-16 text-right ${props.percent > 0 ? 'text-green' : props.percent < 0 ? 'text-danger' : 'text-black'}`}>{props.percent}%</p>
      </NavLink>
    </Row>
  );
};

export const SortBar = (props) => {
  return (
    <Row className="justify-between px-2 mb-2">
      <SortButton onClick={props.onSortPair} className="flex-1 text-left " text={props.data1} />
      <SortButton onClick={props.onSortPrice} className="flex-1 text-right" text={props.data2} />
      <SortButton onClick={props.onSortPercent} className="w-16 text-right " text={props.data3} />
    </Row>
  );
};

export default MarketTable;
