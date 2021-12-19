import { RadioGroup } from '@headlessui/react';
import { Row, Col } from '../atoms/Direction';
import DirectLink from './DirectLink';
import PctList from './PctList';

export default function LimitForm(props) {
  return (
    <form className="flex flex-col gap-2">
      <Row>
        <button type="button" className="bg-stone-200 border border-slate-300 px-5 hover:bg-primary hover:text-white">
          -
        </button>
        <input name="price" type="number" className="w-full border-t border-b border-slate-300  text-center text-xs p-2 focus:outline-none" />
        <button type="button" className="bg-stone-200 border border-slate-300 px-5 hover:bg-primary hover:text-white">
          +
        </button>
      </Row>
      <input name="idr" type="number" placeholder="Jumlah (IDR)" className="w-full border border-slate-300 text-xs p-2 focus:outline-none" />
      <RadioGroup value={props.percent} onChange={props.changePercent}>
        <Row className="text-xs text-gray-500 gap-2">
          <PctList />
        </Row>
      </RadioGroup>
      <input name="estimasi" type="number" placeholder={`Estimasi (BTC)`} className="w-full border border-slate-300 text-xs p-2 focus:outline-none" />
      <Col className="text-center border border-slate-300 py-2 mt-2">
        <DirectLink />
      </Col>
    </form>
  );
}
