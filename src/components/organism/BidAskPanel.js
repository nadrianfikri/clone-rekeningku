import { Col, Row } from '../atoms/Direction';
import { Table, TBody, TData, THeader } from '../atoms/Table';

function BidAskPanel(props) {
  const bidAskIcon = [
    {
      name: 'bidask',
      domain: './icons/bidx.svg',
    },
    {
      name: 'bid',
      domain: './icons/bidx1.svg',
    },
    {
      name: 'ask',
      domain: './icons/bidx2.svg',
    },
  ];

  return (
    <Col className="w-auto lg:w-[270px] h-[920px]  border border-slate-300 rounded">
      <Row className="bg-gray-50 space-x-1 p-1">
        {bidAskIcon.map((item, i) => (
          <button className="bg-white py-[2px] px-[6px] w-8 h-7 border">
            <img src={item.domain} alt={item.name} />
          </button>
        ))}
      </Row>
      <Col className="overflow-auto">
        <Table>
          <THeader head1="Harga" head2="BTC" head3="IDR" />
          <TBody>
            {props.dataBidAsk.map((item, i) => (
              <TData key={i} style1="text-green" data1={item.price} data2={item.btc} data3={item.idr} />
            ))}
          </TBody>
        </Table>

        <span className="bg-stone-200 p-1 text-center font-bold ">600.000.000</span>
        <Table>
          <TBody>
            {props.dataBidAsk.map((item, i) => (
              <TData key={i} style1="text-green" data1={item.price} data2={item.btc} data3={item.idr} />
            ))}
          </TBody>
        </Table>
      </Col>
    </Col>
  );
}

export default BidAskPanel;
