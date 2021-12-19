import { Col } from '../atoms/Direction';
import { Table, TBody, TData, THeader } from '../atoms/Table';

function TransactionPanel(props) {
  return (
    <Col className="relative w-[274px] h-full border border-slate-300 rounded text-xs space-y-2 overflow-auto">
      <Table>
        <THeader head1="Waktu" head2="Harga" head3="IDR" />
        <TBody>
          {props.dataTrans.map((item, i) => (
            <TData key={i} style2="text-green" data1={item.time} data2={item.price} data3={item.idr} />
          ))}
        </TBody>
      </Table>
    </Col>
  );
}

export default TransactionPanel;
