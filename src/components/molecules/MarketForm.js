import { RadioGroup } from '@headlessui/react';
import { Row, Col } from '../atoms/Direction';
import DirectLink from './DirectLink';
import PctList from './PctList';

export default function MarketForm(props) {
  return (
    <form className="flex flex-col gap-2">
      <Row className="w-full justify-center text-xs p-2 bg-white text-gray-500">Harga Pasar</Row>
      <input name="idr" type="number" placeholder="Jumlah (IDR)" className="w-full border border-slate-300 text-xs p-2 focus:outline-none" />
      <RadioGroup value={props.percent} onChange={props.changePercent}>
        <Row className="text-xs text-gray-500 gap-2">
          <PctList />
        </Row>
      </RadioGroup>
      <Col className="text-center border border-slate-300 py-2 mt-2">
        <DirectLink />
      </Col>
    </form>
  );
}
