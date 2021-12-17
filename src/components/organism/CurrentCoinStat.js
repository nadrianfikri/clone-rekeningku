import { Row } from '../atoms/Direction';
import CurrentCoin from '../molecules/CurrentCoin';
import StatList from '../molecules/StatList';

function CurrentCoinStat(props) {
  return (
    <Row className="justify-between mr-20 py-1 mb-4">
      <CurrentCoin code={props.code} coinName={props.coinName} pair={props.pair} />
      <StatList currentStat={props.stat} />
    </Row>
  );
}

export default CurrentCoinStat;
