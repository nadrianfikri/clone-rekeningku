import CoinLogo from './CoinLogo';
import { Row } from './Direction';

function CoinPair(props) {
  return (
    <Row className="text-[11px] items-center gap-1">
      <CoinLogo src={props.logo} name={props.code} />
      <span className="font-bold">{props.code}</span>/<span className="text-[10px] font-normal">IDR</span>
    </Row>
  );
}

export default CoinPair;
