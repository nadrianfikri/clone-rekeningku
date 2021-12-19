import { SortButton } from '../atoms/Button';
import { Row } from '../atoms/Direction';

function SortBar(props) {
  return (
    <Row className="justify-between px-2">
      <SortButton onClick={props.onSortPair} className="flex-1 text-left " text={props.data1} />
      <SortButton onClick={props.onSortPrice} className="flex-1 text-right" text={props.data2} />
      <SortButton onClick={props.onSortPercent} className="w-16 text-right " text={props.data3} />
    </Row>
  );
}

export default SortBar;
