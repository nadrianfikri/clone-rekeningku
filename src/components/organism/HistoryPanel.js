import { Tab } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { Col } from '../atoms/Direction';
import { OrderTable } from '../atoms/Table';
import DirectLink from '../molecules/DirectLink';

function HistoryPanel() {
  return (
    <Col className="relative">
      <Tab.Group>
        <Tab.List className="text-xs w-max relative z-10 bg-white top-[1.3px]">
          <Tab>
            {({ selected }) => (
              <button className={`border-slate-300 rounded rounded-r-none rounded-b-none px-4 py-2 font-semibold ${selected ? 'bg-white  border-slate-300 border-l border-t border-r  rounded-tr' : 'bg-stone-100 border-b'}`}>
                Pending Order
              </button>
            )}
          </Tab>
          <Tab>
            {({ selected }) => (
              <button className={`border-slate-300 rounded rounded-l-none rounded-b-none px-4 py-2 font-semibold ${selected ? 'bg-white  border-slate-300 border-l border-t border-r  rounded-tr rounded-tl' : 'bg-stone-100 border-b'}`}>
                Riwayat Order 7 Hari Saya
              </button>
            )}
          </Tab>
        </Tab.List>

        <Tab.Panels className="flex flex-col p-5 border border-slate-300 rounded rounded-tl-none h-96">
          <Tab.Panel className="flex flex-col h-full">
            <OrderTable head1="Tanggal" head2="Pair" head3="Sisi" head4="Jumlah" head5="Harga" head6="Terisi (%)" head7="Total" />
            <Col className="w-full h-full justify-center items-center">
              <DirectLink etc="untuk trading" />
            </Col>
          </Tab.Panel>
          <Tab.Panel className="flex flex-col h-full">
            <Link to="/order" className="absolute top-3 right-0 font-semibold underline text-xs">
              Lainnya
            </Link>
            <OrderTable head1="Tanggal" head2="Pair" head3="Sisi" head4="Jumlah" head5="Harga" head6="Total" head7="Status" />
            <Col className="w-full h-full  justify-center items-center">
              <DirectLink etc="untuk trading" />
            </Col>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </Col>
  );
}

export default HistoryPanel;
