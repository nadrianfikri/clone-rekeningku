import { Table, TBody, TData, THeader } from '../atoms/Table';
import rupiah from '../../utils/rupiahFormat';

export const BidAskTable = (props) => {
  return (
    <>
      <Table>
        <THeader head1="Harga" head2={props.coin} head3="IDR" />
        <TBody>
          {props.dataAsk?.slice(-17).map((item, i) => (
            <TData key={i} style1="text-danger" data1={rupiah(item[1])} data2={item[2]?.toFixed(4)} data3={rupiah(item[0])} />
          ))}
        </TBody>
      </Table>

      <span className="bg-stone-200 p-1 text-center font-bold ">{props.lastPrice}</span>
      <Table>
        <TBody>
          {props.dataBid?.slice(0, 17).map((item, i) => (
            <TData key={i} style1="text-green" data1={rupiah(item[1])} data2={item[2]?.toFixed(4)} data3={rupiah(item[0])} />
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
          {props.lastPrice}
        </td>
      </tr>
      <TBody>
        {props.dataBid?.map((item, i) => (
          <TData key={i} style1="text-green" data1={rupiah(item[1])} data2={item[2]?.toFixed(4)} data3={rupiah(item[0])} />
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
        {props.dataAsk?.map((item, i) => (
          <TData key={i} style1="text-danger" data1={rupiah(item[1])} data2={item[2]?.toFixed(4)} data3={rupiah(item[0])} />
        ))}
      </TBody>
      <tr className="sticky  bottom-0">
        <td colSpan="3" className="bg-stone-200 p-1 text-center text-base font-bold">
          {props.lastPrice}
        </td>
      </tr>
    </Table>
  );
};
