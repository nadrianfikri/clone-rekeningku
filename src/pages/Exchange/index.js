import { Col, Row } from '../../components/atoms/Direction';
import WarningQoutes from '../../components/atoms/WarningQoutes';
import BidAskPanel from '../../components/organism/BidAskPanel';
import CurrentCoinStat from '../../components/organism/CurrentCoinStat';
import Footer from '../../components/organism/Footer';
import MarketPanel from '../../components/organism/MarketPanel';
import Navbar from '../../components/organism/Navbar';
import HistoryPanel from '../../components/organism/HistoryPanel';
import TransactionPanel from '../../components/organism/TransactionPanel';
import OrderPanel from '../../components/organism/OrderPanel';

function Exchange() {
  const currentStat = {
    price: '683.530.000',
    percent: '(-1.71%)',
    high: '701.070.000',
    low: '659.390.000',
    vol: '92.689.606.003',
  };
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
  const coin = {
    name: 'Bitcoin',
    code: 'BTC',
  };

  const title = `BTC to IDR | 677.780.000 | Harga Bitcoin Hari Ini | Rekeningku`;
  window.document.title = title;
  return (
    <div>
      <Navbar />
      <main className="relative min-h-screen px-4 md:px-10 lg:px-20 py-4 space-y-10">
        <Row className="w-full space-x-2 h-[920px]">
          <Col className="flex-1 ">
            <CurrentCoinStat
              //
              coinName="Bitcoin"
              code="BTC"
              pair="IDR"
              lastPrice={currentStat.price}
              percent={currentStat.percent}
              highPrice={currentStat.high}
              lowPrice={currentStat.low}
              vol={currentStat.vol}
            />
            <Row className="space-x-2  h-full">
              <Col className="space-y-2">
                <MarketPanel />
                <p className="font-bold">Aktivitas Transaksi</p>
                <TransactionPanel dataTrans={trans} />
              </Col>
              {/* chart */}
              <Col className="flex-1 space-y-2">
                <Col className="flex-1 border border-slate-300 rounded ">Chart</Col>
                <OrderPanel />
              </Col>
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

        <HistoryPanel />

        <WarningQoutes
          className="text-gray-400"
          text={`Jual Beli ${coin.name} Indonesia, kripto, dan aset digital lainnya dengan rupiah dan biaya terendah hanya di Rekeningku. Cek Harga ${coin.name} atau Kurs ${coin.name} hari ini dalam Rupiah (${coin.code} to IDR) secara real-time. Nikmati pengalaman trading ${coin.name} dengan fitur chart ${coin.name} dan teknikal indicator lengkap yang membantu dalam bertransaksi. Daftar jadi member di Rekeningku dan mulai investasi ${coin.name} sekarang!`}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Exchange;
