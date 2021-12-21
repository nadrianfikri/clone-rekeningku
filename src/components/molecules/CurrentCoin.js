import CoinLogo from '../atoms/CoinLogo';
import { Col, Row } from '../atoms/Direction';

function CurrentCoin(props) {
  return (
    <Col className="w-[200px] -translate-y-1">
      <p className="text-[22px] font-bold">
        {props.code} <span className="text-stone-400 text-sm font-medium"> / {props.pair}</span>
      </p>
      <Row className="space-x-2">
        <CoinLogo src={props.logo} name={props.coinName} />
        <p className="text-[10.5px]">{props.coinName}</p>
      </Row>
    </Col>
  );
}

export default CurrentCoin;
