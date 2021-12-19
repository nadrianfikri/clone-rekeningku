function Table({ children }) {
  return <table className="text-right w-full overflow-auto text-xs font-normal">{children}</table>;
}
function THeader(props) {
  return (
    <thead className="text-gray-500 sticky top-0 bg-white">
      <tr className=" ">
        <th className="text-left pt-2">{props.head1}</th>
        <th className="text-right pt-2">{props.head2}</th>
        <th className="text-right pt-2">{props.head3}</th>
      </tr>
    </thead>
  );
}

function TData(props) {
  return (
    <tr className=" hover:bg-stone-200 cursor-pointer " onClick={props.onClick}>
      <td className={`${props.style1} text-left`}>{props.data1}</td>
      <td className={`${props.style2} `}>{props.data2}</td>
      <td className={`${props.style3}`}>{props.data3}</td>
    </tr>
  );
}
function TBody({ children }) {
  return <tbody className=" overflow-y-scroll">{children}</tbody>;
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
