import { Col, Row } from '../../components/atoms/Direction';
import BidAskPanel from '../../components/organism/BidAskPanel';
import CurrentCoinStat from '../../components/organism/CurrentCoinStat';
import Footer from '../../components/organism/Footer';
import MarketPanel from '../../components/organism/MarketPanel';
import Navbar from '../../components/organism/Navbar';
import TransactionPanel from '../../components/organism/TransactionPanel';

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
  const bidAsk = [
    {
      price: '683.530.000',
      btc: '0.00032',
      idr: '100.000.000',
    },
    {
      price: '683.530.000',
      btc: '0.00032',
      idr: '100.000.000',
    },
    {
      price: '683.530.000',
      btc: '0.00032',
      idr: '100.000.000',
    },
    {
      price: '683.530.000',
      btc: '0.00032',
      idr: '100.000.000',
    },
    {
      price: '683.530.000',
      btc: '0.00032',
      idr: '100.000.000',
    },
    {
      price: '683.530.000',
      btc: '0.00032',
      idr: '100.000.000',
    },
    {
      price: '683.530.000',
      btc: '0.00032',
      idr: '100.000.000',
    },
    {
      price: '683.530.000',
      btc: '0.00032',
      idr: '100.000.000',
    },
    {
      price: '683.530.000',
      btc: '0.00032',
      idr: '100.000.000',
    },
    {
      price: '683.530.000',
      btc: '0.00032',
      idr: '100.000.000',
    },
    {
      price: '683.530.000',
      btc: '0.00032',
      idr: '100.000.000',
    },
    {
      price: '683.530.000',
      btc: '0.00032',
      idr: '100.000.000',
    },
    {
      price: '683.530.000',
      btc: '0.00032',
      idr: '100.000.000',
    },
    {
      price: '683.530.000',
      btc: '0.00032',
      idr: '100.000.000',
    },
    {
      price: '683.530.000',
      btc: '0.00032',
      idr: '100.000.000',
    },
    {
      price: '683.530.000',
      btc: '0.00032',
      idr: '100.000.000',
    },
    {
      price: '683.530.000',
      btc: '0.00032',
      idr: '100.000.000',
    },
  ];
  return (
    <div>
      <Navbar />
      <main className="relative min-h-screen px-4 md:px-10 lg:px-20 py-4 space-y-10">
        <Row className="w-full space-x-2 h-[920px]">
          <Col className="flex-1 ">
            <CurrentCoinStat coinName="Bitcoin" code="BTC" pair="IDR" stat={currentStat} />
            <Row className="space-x-2  h-full">
              <Col className="space-y-2">
                <MarketPanel />
                <p className="font-bold">Aktivitas Transaksi</p>
                <TransactionPanel dataTrans={trans} />
              </Col>
              {/* chart */}
              <Col className="flex-1 p-2 border  border-slate-300 rounded  bg-rose-200">chart</Col>
            </Row>
          </Col>
          <BidAskPanel
            //
            coin="BTC"
            lastPrice="650.000.000"
            lastBid="660.000.000"
            lastAsk="640.000.000"
            dataBidAsk={bidAsk}
            dataBid={bidAsk}
            dataAsk={bidAsk}
          />
        </Row>
        <div className="w-full bg-red-200">kolom pending</div>
      </main>
      <Footer />
    </div>
  );
}

export default Exchange;
