import { Col, Row } from '../../components/atoms/Direction';
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
      <main className="min-h-screen px-4 md:px-10 lg:px-20 py-4">
        <Row className="w-full">
          <CurrentCoinStat coinName="Bitcoin" code="BTC" pair="IDR" stat={currentStat} />
          <Col className="w-auto lg:w-[270px] bg-emerald-300">Right Side</Col>
        </Row>
      </main>
      <Footer />
    </div>
  );
}

export default Exchange;
