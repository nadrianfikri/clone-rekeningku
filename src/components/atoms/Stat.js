import { Col } from './Direction';

function Stat(props) {
  return (
    <Col className="justify-center">
      <p className="text-xs text-stone-400">{props.name}</p>
      <p className="font-bold text-sm">
        {props.price} <span className="ml-2 text-red-500">{props.percent}</span>
      </p>
    </Col>
  );
}

export default Stat;
