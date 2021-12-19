import { Table, TBody, TData, THeader } from '../atoms/Table';

export const BidAskTable = (props) => {
  return (
    <>
      <Table>
        <THeader head1="Harga" head2={props.coin} head3="IDR" />
        <TBody>
          {props.dataBidAsk.map((item, i) => (
            <TData key={i} style1="text-green" data1={item.price} data2={item.btc} data3={item.idr} />
          ))}
        </TBody>
      </Table>

      <span className="bg-stone-200 p-1 text-center font-bold ">{props.lastPrice}</span>
      <Table>
        <TBody>
          {props.dataBidAsk.map((item, i) => (
            <TData key={i} style1="text-danger" data1={item.price} data2={item.btc} data3={item.idr} />
          ))}
        </TBody>
      </Table>
    </>
  );
};

export const BidOnlyTable = (props) => {
  return (
    <Table>
      <THeader head1="Harga" head2={props.coin} head3="IDR" />
      <tr className="sticky top-8">
        <td colSpan="3" className="bg-stone-200 p-1 text-center text-base font-bold">
          {props.lastBid}
        </td>
      </tr>
      <TBody>
        {props.dataBid.map((item, i) => (
          <TData key={i} style1="text-green" data1={item.price} data2={item.btc} data3={item.idr} />
        ))}
      </TBody>
    </Table>
  );
};

export const AskOnlyTable = (props) => {
  return (
    <Table>
      <THeader head1="Harga" head2={props.coin} head3="IDR" />
      <TBody>
        {props.dataAsk.map((item, i) => (
          <TData key={i} style1="text-danger" data1={item.price} data2={item.btc} data3={item.idr} />
        ))}
      </TBody>
      <tr className="sticky  bottom-0">
        <td colSpan="3" className="bg-stone-200 p-1 text-center text-base font-bold">
          {props.lastAsk}
        </td>
      </tr>
    </Table>
  );
};
