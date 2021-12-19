import MarketTable, { SortBar, MarketTableData, FavoriteCoin } from '../molecules/MarketTable';
import { Tab } from '@headlessui/react';
import { Col } from '../atoms/Direction';
import Search from '../atoms/Search';
function MarketPanel() {
  return (
    <Col className="w-[274px] h-full border border-slate-300 rounded overflow-hidden text-xs space-y-2">
      <Tab.Group>
        <Tab.List className="flex flex-row-reverse justify-end gap-1 p-2 ">
          <Tab className={({ selected }) => (selected ? 'bg-gray-200  p-1 rounded' : 'text-stone-500 p-1 rounded hover:bg-gray-200')}>Markets</Tab>
          <Tab className={({ selected }) => (selected ? 'bg-gray-200  p-1 rounded' : 'text-stone-500 p-1 rounded hover:bg-gray-200')}>Favorit</Tab>
        </Tab.List>
        <Search />
        <MarketTable>
          <SortBar onSortPair onSortPrice onSortPercent data1="Pair" data2="Harga" data3="24H" />
          <Tab.Panels className="overflow-auto">
            <Tab.Panel>
              <MarketTableData logo="./images/btc.jpeg" code="BTC" price="600.000.000" percent="-7.00%" onToggle onClick />
              <MarketTableData logo="./images/btc.jpeg" code="BTC" price="600.000.000" percent="-7.00%" onToggle onClick />
              <MarketTableData logo="./images/btc.jpeg" code="BTC" price="600.000.000" percent="-7.00%" onToggle onClick />
            </Tab.Panel>
            <Tab.Panel>
              <FavoriteCoin logo="./images/btc.jpeg" code="BTC" price="600.000.000" percent="-7.00%" onToggle onClick />
            </Tab.Panel>
          </Tab.Panels>
        </MarketTable>
      </Tab.Group>
    </Col>
  );
}

export default MarketPanel;
