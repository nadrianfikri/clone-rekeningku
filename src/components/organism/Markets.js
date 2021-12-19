import { Col, Row } from '../atoms/Direction';
import Search from '../atoms/Search';
import MarketTable, { SortBar, MarketTableData } from '../molecules/MarketTable';
function Markets() {
  return (
    <Col className="w-[274px] h-[390px] border border-slate-300 rounded overflow-hidden text-xs space-y-2">
      <Row className="space-x-2 p-2">
        <button className="text-stone-500">Favorit</button>
        <button className="rounded bg-gray-200 p-1">Markets</button>
      </Row>
      <Search />
      <MarketTable>
        <SortBar onSortPair onSortPrice onSortPercent data1="Pair" data2="Harga" data3="24H" />
        <div className="overflow-auto">
          <MarketTableData logo="./images/btc.jpeg" code="BTC" price="600.000.000" percent="-7.00%" onToggle onClick />
        </div>
      </MarketTable>
    </Col>
  );
}

export default Markets;
