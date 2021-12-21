import rupiah from '../../utils/rupiahFormat';
import { Col } from '../atoms/Direction';
import { Table, TBody, TData, THeader } from '../atoms/Table';

function TransactionPanel(props) {
  return (
    <Col className="relative w-[274px] h-full border border-slate-300 rounded text-xs space-y-2 overflow-auto">
      <Table>
        <THeader head1="Waktu" head2="Harga" head3="IDR" />
        <TBody>
          {props.dataTrans.map((item, i) => (
            <TData key={i} style2={item[1] === 0 ? 'text-green' : 'text-danger'} data1={item[0]} data2={rupiah(item[2])} data3={rupiah(item[3])} />
          ))}
        </TBody>
      </Table>
    </Col>
  );
}

export default TransactionPanel;
