import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { API } from '../../config/api';
import rupiah from '../../utils/rupiahFormat';

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

import { useDispatch, useSelector } from 'react-redux';
import { getAllPrices } from '../../actions/pricesAction';
import Chart from '../../components/organism/Chart';

function Exchange() {
  // use redux
  const { getAllPricesResult, getAllPricesLoading, getAllPricesErr } = useSelector((state) => state.PricesReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    // call func
    console.log('1. didmount');
    dispatch(getAllPrices());
  }, [dispatch]);

  const { id, coin } = useParams();

  const [price, setPrice] = useState(null);
  const [prices, setPrices] = useState([]);
  const [coins, setCoins] = useState([]);
  const [trans, setTrans] = useState([]);
  const [order, setOrder] = useState([]);

  // get data price current coin
  const getPrice = async () => {
    try {
      const res = await API.get(`/price/${id}`);
      const data = res.data;
      data.cp = data.cp.toFixed(2);

      const coinData = await API.get(`/coins`);

      // eslint-disable-next-line eqeqeq
      const coin = coinData.data.result.find((item) => item.id == id);

      setPrice({
        ...data,
        logo: coin?.logo,
      });
      setCoins(coinData.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  // get data price all coin
  const getPrices = async () => {
    try {
      const res = await API.get(`/price`);
      setPrices(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  // get transaction activity
  const getTrans = async () => {
    try {
      const res = await API.get(`acctrade/${coin}_IDR`);
      const data = res.data;
      data.map((item) => {
        return (item[0] = new Date(item[0] * 1000).toLocaleTimeString('en-US').substring(0, 5));
      });

      setTrans(data);
    } catch (error) {
      console.log(error);
    }
  };
  // get orderBook
  const getOrder = async () => {
    try {
      const res = await API.get(`/orderbook?id=${id}`);
      const data = res.data;
      data.s = Array.from(data.s).reverse();
      setOrder(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPrice();
    getPrices();
    getTrans();
    getOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price]);

  const title = `${price?.cd} to IDR | ${rupiah(price?.c)} | Harga ${price?.n} Hari Ini | Rekeningku`;
  window.document.title = title;
  return (
    <div>
      <Navbar />
      <main className="relative min-h-screen px-4 md:px-10 lg:px-20 py-4 space-y-10">
        <Row className="w-full space-x-2 ">
          <Col className="flex-1  h-[846px]">
            {price === null && coins.length === 0 ? (
              <p>Loading</p>
            ) : (
              <CurrentCoinStat
                //
                logo={price.logo}
                coinName={price.n}
                code={price.cd}
                pair="IDR"
                lastPrice={rupiah(price.c)}
                percent={price.cp}
                highPrice={rupiah(price.h)}
                lowPrice={rupiah(price.l)}
                vol={rupiah(price.v)}
              />
            )}
            <Row className="space-x-2  h-full">
              <Col className="space-y-2">
                {getAllPricesResult ? <MarketPanel dataCoin={coins} dataPrice={getAllPricesResult} /> : getAllPricesLoading ? <p>loading</p> : <p>{getAllPricesErr ? getAllPricesErr : 'data kosong'}</p>}
                <p className="font-bold">Aktivitas Transaksi</p>
                <TransactionPanel dataTrans={trans} />
              </Col>
              {/* chart */}
              <Col className="flex-1 space-y-2">
                <Col className="flex-1 border border-slate-300 rounded ">
                  <Chart />
                </Col>
                <OrderPanel />
              </Col>
            </Row>
          </Col>
          <BidAskPanel
            //
            coin={coin}
            lastPrice={rupiah(price?.c)}
            dataBid={order?.b}
            dataAsk={order?.s}
          />
        </Row>

        <HistoryPanel />

        <WarningQoutes
          className="text-gray-400"
          text={`Jual Beli ${price?.n} Indonesia, kripto, dan aset digital lainnya dengan rupiah dan biaya terendah hanya di Rekeningku. Cek Harga ${price?.n} atau Kurs ${price?.n} hari ini dalam Rupiah (${price?.cd} to IDR) secara real-time. Nikmati pengalaman trading ${price?.n} dengan fitur chart ${price?.n} dan teknikal indicator lengkap yang membantu dalam bertransaksi. Daftar jadi member di Rekeningku dan mulai investasi ${price?.n} sekarang!`}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Exchange;
