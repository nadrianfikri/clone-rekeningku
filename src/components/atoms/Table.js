import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CoinLogo from './CoinLogo';

function Table({ children }) {
  return <table className="text-right w-full  text-xs font-normal border border-gray-400 ">{children}</table>;
}
function THeader(props) {
  return (
    <thead className="text-gray-500 ">
      <tr className="">
        <th className="text-left">{props.head1}</th>
        <th>{props.head2}</th>
        <th>{props.head3}</th>
      </tr>
    </thead>
  );
}

function TData(props) {
  return (
    <tr className="relative hover:bg-stone-200 cursor-pointer font-semibold text-[11px]" onClick={props.onClick}>
      <td className="text-left font-light flex gap-1  items-center">
        <FontAwesomeIcon className="relative text-gray-300 mr-[2px] z-10 hover:text-yellow-500" icon={faStar} onClick={props.onToggle} />
        <CoinLogo src={props.coinLogo} name={props.data1} />
        <span className="font-bold">{props.data1}</span>/<span className="text-[10px]">IDR</span>
      </td>
      <td>{props.data2}</td>
      <td>{props.data3}</td>
    </tr>
  );
}
function TBody({ children }) {
  return <tbody className="overflow-auto">{children}</tbody>;
}

function TFoot(props) {
  return (
    <tfoot className="font-bold text-xs md:text-lg">
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td className="py-2">Total</td>
        <td className="py-2">:</td>
        <td className="text-red-600 py-2">{props.total}</td>
      </tr>
    </tfoot>
  );
}
function TData2(props) {
  return (
    <tr className="border-b border-grey-600  overflow-hidden">
      <td className="px-2">{props.no}</td>
      <td>{props.user}</td>
      <td className="md:w-64 ">{props.trip}</td>
      <td>
        <a href={props.proofTF} target="_blank" rel="noreferrer">
          <img className="w-20" src={props.proofTF} alt="proof" />{' '}
        </a>
      </td>
      <td className="">{props.updatedAt}</td>
      <td className={`font-bold ${props.statusStyle} py-4`}>{props.status}</td>
      <td>
        <button onClick={props.onClick} type="button">
          <img id={props.id} src="/assets/icons/search.svg" alt="icon" />
        </button>
      </td>
    </tr>
  );
}
export { Table, THeader, TBody, TData, TData2, TFoot };
