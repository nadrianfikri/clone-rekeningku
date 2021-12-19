import { Col, Row } from '../../components/atoms/Direction';
import CurrentCoinStat from '../../components/organism/CurrentCoinStat';
import Footer from '../../components/organism/Footer';
import Markets from '../../components/organism/Markets';
import Navbar from '../../components/organism/Navbar';
import Transaction from '../../components/organism/Transaction';

function Exchange() {
  const currentStat = [
    {
      name: 'Harga Terakhir',
      price: '683.530.000',
      percent: '(-1.71%)',
    },
    {
      name: 'High 24 Jam',
      price: '701.070.000',
    },
    {
      name: 'Low 24 Jam',
      price: '659.390.000',
    },
    {
      name: 'Volume 24 Jam',
      price: '92.689.606.003',
    },
  ];

  const trans = [
    {
      time: '11:40',
      price: '683.530.000',
      idr: '100.000.000',
    },
    {
      time: '11:30',
      price: '683.530.000',
      idr: '100.000.000',
    },
    {
      time: '11:20',
      price: '683.530.000',
      idr: '100.000.000',
    },
  ];
  return (
    <div>
      <Navbar />
      <main className="relative min-h-screen px-4 md:px-10 lg:px-20 py-4">
        <Row className="w-full space-x-2">
          <Col className="flex-1">
            <CurrentCoinStat coinName="Bitcoin" code="BTC" pair="IDR" stat={currentStat} />
            <Row className="space-x-2">
              <Col className="space-y-2">
                <Markets />
                <p className="font-bold">Aktivitas Transaksi</p>
                <Transaction dataTrans={trans} />
              </Col>
              {/* chart */}
              <Col className="flex-1 p-2 border border-slate-300 rounded  bg-rose-200">chart</Col>
            </Row>
          </Col>
          <Col className="w-auto lg:w-[270px] p-2 border border-slate-300 rounded  bg-emerald-300">Right Side</Col>
        </Row>
      </main>
      <Footer />
    </div>
  );
}

export default Exchange;
