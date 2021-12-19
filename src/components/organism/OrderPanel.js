import { Tab } from '@headlessui/react';
import { useState } from 'react';
import { Col } from '../atoms/Direction';
import LimitForm from '../molecules/LimitForm';
import MarketForm from '../molecules/MarketForm';

function OrderPanel() {
  const [buy, setBuy] = useState('');
  const [sell, setSell] = useState('');

  return (
    <Col className="flex-1 relative">
      <Tab.Group>
        <Tab.List className="text-sm w-max relative z-10 bg-white top-[1.3px]">
          <Tab>
            {({ selected }) => (
              <button
                className={`border-b border-b-stone-100 border-slate-300 rounded rounded-r-none rounded-b-none px-6 py-2 hover:bg-stone-100 transition-all ${
                  selected ? 'bg-stone-100  border-slate-300 border-l border-t border-r  rounded-tr ' : 'bg-white  border-b-slate-300'
                }`}
              >
                Limit
              </button>
            )}
          </Tab>
          <Tab>
            {({ selected }) => (
              <button
                className={`border-b border-b-stone-100  border-slate-300 rounded rounded-l-none rounded-b-none px-6 py-2 hover:bg-stone-100 transition-all ${
                  selected ? 'bg-stone-100  border-slate-300 border-l border-t border-r  rounded-tr rounded-tl' : 'bg-white border-b-slate-300'
                }`}
              >
                Market
              </button>
            )}
          </Tab>
        </Tab.List>

        <Tab.Panels className="flex flex-col py-6 bg-stone-100 border border-slate-300 rounded rounded-tl-none h-96">
          <Tab.Panel className="flex w-full h-full">
            <div className="flex-1 px-6  border-r border-slate-300">
              <h1 className="mb-4 font-semibold">Beli BTC</h1>
              <LimitForm percent={buy} changePercent={setBuy} />
            </div>
            <div className="flex-1 px-6  border-r border-slate-300">
              <h1 className="mb-4 font-semibold">Jual BTC</h1>
              <LimitForm percent={sell} changePercent={setSell} />
            </div>
          </Tab.Panel>
          <Tab.Panel className="flex w-full h-full">
            <div className="flex-1 px-6  border-r border-slate-300">
              <h1 className="mb-4 font-semibold">Beli BTC</h1>
              <MarketForm percent={buy} changePercent={setBuy} />
            </div>
            <div className="flex-1 px-6  border-r border-slate-300">
              <h1 className="mb-4 font-semibold">Jual BTC</h1>
              <MarketForm percent={sell} changePercent={setSell} />
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </Col>
  );
}

export default OrderPanel;
