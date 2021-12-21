import { Row } from '../atoms/Direction';
import CurrentCoin from '../molecules/CurrentCoin';
import StatList from '../molecules/StatList';

function CurrentCoinStat(props) {
  return (
    <Row className="justify-between mr-20 py-1 mb-4">
      <CurrentCoin logo={props.logo} code={props.code} coinName={props.coinName} pair={props.pair} />
      <StatList
        //
        lastPrice={props.lastPrice}
        percent={props.percent}
        highPrice={props.highPrice}
        lowPrice={props.lowPrice}
        vol={props.vol}
      />
    </Row>
  );
}

export default CurrentCoinStat;
