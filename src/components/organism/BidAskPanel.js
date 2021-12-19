import { AskOnlyTable, BidAskTable, BidOnlyTable } from '../atoms/BidAskTables';
import { Col } from '../atoms/Direction';
import { Tab } from '@headlessui/react';

function BidAskPanel(props) {
  const bidAskIcon = [
    {
      name: 'bidask',
      domain: './icons/bidx.svg',
    },
    {
      name: 'bid',
      domain: './icons/bidx1.svg',
    },
    {
      name: 'ask',
      domain: './icons/bidx2.svg',
    },
  ];

  return (
    <Col className="w-auto lg:w-[270px] h-[920px]  border border-slate-300 rounded">
      <Tab.Group>
        <Tab.List className="flex bg-gray-50 space-x-1 p-1">
          {bidAskIcon.map((item, i) => (
            <Tab>
              {({ selected }) => (
                <button className={`border  py-[2px] px-[6px] w-8 h-7 ${selected ? 'bg-blue-50  border-blue-400' : 'bg-white'}`}>
                  <img src={item.domain} alt={item.name} />
                  {console.log(selected)}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="flex flex-col overflow-auto">
          <Tab.Panel className="flex flex-col">
            <BidAskTable coin={props.coin} dataBidAsk={props.dataBidAsk} lastPrice={props.lastPrice} />
          </Tab.Panel>
          <Tab.Panel className="flex flex-col">
            <BidOnlyTable coin={props.coin} dataBid={props.dataBid} lastBid={props.lastBid} />
          </Tab.Panel>
          <Tab.Panel className="flex flex-col">
            <AskOnlyTable coin={props.coin} dataAsk={props.dataAsk} lastAsk={props.lastAsk} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </Col>
  );
}

export default BidAskPanel;
