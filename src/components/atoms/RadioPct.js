import { RadioGroup } from '@headlessui/react';

function RadioPct(props) {
  return (
    <RadioGroup.Option className="flex flex-1 text-center bg-white items-center cursor-pointer " value={props.value}>
      {({ checked }) => <span className={`w-full border bg-white py-2 hover:bg-primary hover:text-white ${checked ? 'bg-primary text-white' : ''}`}>{props.value}%</span>}
    </RadioGroup.Option>
  );
}

export default RadioPct;
