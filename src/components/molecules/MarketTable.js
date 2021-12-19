import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '../atoms/Direction';
import { SortButton } from '../atoms/Button';
import CoinPair from '../atoms/CoinPair';

function MarketTable(props) {
  return <Col className="w-full overflow-auto">{props.children}</Col>;
}
export const MarketTableData = (props) => {
  return (
    <Row className="py-1 px-2 gap-1 items-center w-full text-[11px]  hover:bg-stone-100">
      <FontAwesomeIcon className="text-gray-300 mr-[2px] z-10 cursor-pointer" icon={faStar} onClick={props.onToggle} />
      <button onClick={props.onClick} className=" flex w-full justify-between  ">
        <CoinPair logo={props.logo} code={props.code} />
        <p>{props.price}</p>
        <p>{props.percent}</p>
      </button>
    </Row>
  );
};
export const FavoriteCoin = (props) => {
  return (
    <Row className="py-1 px-2 gap-1 items-center w-full text-[11px]  hover:bg-stone-100">
      <FontAwesomeIcon className="text-yellow-400 mr-[2px] z-10 cursor-pointer" icon={faStar} onClick={props.onToggle} />
      <button onClick={props.onClick} className=" flex w-full justify-between  ">
        <CoinPair logo={props.logo} code={props.code} />
        <p>{props.price}</p>
        <p>{props.percent}</p>
      </button>
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
