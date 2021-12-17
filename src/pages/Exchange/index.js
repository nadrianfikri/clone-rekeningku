import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '../../components/atoms/Direction';
import Search from '../../components/atoms/Search';
import CurrentCoinStat from '../../components/organism/CurrentCoinStat';
import Footer from '../../components/organism/Footer';
import Navbar from '../../components/organism/Navbar';

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
  return (
    <div>
      <Navbar />
      <main className="relative min-h-screen px-4 md:px-10 lg:px-20 py-4">
        <Row className="w-full space-x-2 ">
          <Col className="flex-1">
            <CurrentCoinStat coinName="Bitcoin" code="BTC" pair="IDR" stat={currentStat} />
            <Row className="space-x-2">
              <Col className="w-[274px] h-[390px] p-2 border border-slate-200 rounded overflow-auto text-xs space-y-2">
                <Row className="space-x-2">
                  <button className="text-stone-500">Favorit</button>
                  <button className="rounded bg-gray-200 p-1">Markets</button>
                </Row>
                <Search />
                <p className="">hallo table</p>
              </Col>
              <Col className="flex-1 p-2 border border-slate-200 rounded  bg-rose-200">chart</Col>
            </Row>
          </Col>
          <Col className="w-auto lg:w-[270px] p-2 border border-slate-200 rounded  bg-emerald-300">Right Side</Col>
        </Row>
      </main>
      <Footer />
    </div>
  );
}

export default Exchange;
