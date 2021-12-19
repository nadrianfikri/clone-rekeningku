function Table({ children }) {
  return <table className="relative text-right w-full overflow-auto text-xs font-normal">{children}</table>;
}
function THeader(props) {
  return (
    <thead className={`${props.className} text-gray-500 sticky top-0 bg-white`}>
      <tr className="">
        <th className="text-left py-2 pl-2">{props.head1}</th>
        <th className="text-right py-2">{props.head2}</th>
        <th className="text-right py-2 pr-2">{props.head3}</th>
      </tr>
    </thead>
  );
}

function TData(props) {
  return (
    <tr className=" hover:bg-emerald-50 cursor-pointer " onClick={props.onClick}>
      <td className={`${props.style1} text-left py-1 pl-2`}>{props.data1}</td>
      <td className={`${props.style2} py-1`}>{props.data2}</td>
      <td className={`${props.style3} py-1 pr-2`}>{props.data3}</td>
    </tr>
  );
}
function TBody({ children }) {
  return <tbody className=" overflow-y-scroll ">{children}</tbody>;
}

function OrderTable(props) {
  return (
    <table className="relative text-left w-full  overflow-auto text-xs text-stone-500">
      <thead className="bg-stone-100">
        <tr>
          <th className="py-1 pl-2">{props.head1}</th>
          <th className="py-1">{props.head2}</th>
          <th className="py-1">{props.head3}</th>
          <th className="py-1">{props.head4}</th>
          <th className="py-1">{props.head5}</th>
          <th className="py-1">{props.head6}</th>
          <th className="py-1 pr-2">{props.head7}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-1">{props.data1}</td>
          <td className="py-1">{props.data2}</td>
          <td className="py-1">{props.data3}</td>
          <td className="py-1">{props.data4}</td>
          <td className="py-1">{props.data5}</td>
          <td className="py-1">{props.data6}</td>
          <td className="py-1">{props.data7}</td>
        </tr>
      </tbody>
    </table>
  );
}

export { Table, THeader, TBody, TData, OrderTable };
