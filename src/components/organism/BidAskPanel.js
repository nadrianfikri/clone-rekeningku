import { AskOnlyTable, BidAskTable, BidOnlyTable } from '../atoms/BidAskTables';
import { Col } from '../atoms/Direction';
import { Tab } from '@headlessui/react';

function BidAskPanel(props) {
  const bidAskIcon = [
    {
      name: 'bidask',
      domain:
        'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyNkE1ODc7fS5jbHMtMntmaWxsOiNFRjUzNTA7fS5jbHMtM3tmaWxsOiM3OTg4OTc7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5iaWR4PC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yMC43OCwxN0gxMS40NGwtMS4wOC0yLjQzYS40Ny40NywwLDAsMS0uMDYtLjA5LDEsMSwwLDAsMC0uMTItLjE2LDEuMDcsMS4wNywwLDAsMC0uMTYtLjE0czAsMC0uMDgtLjA3bC0uMDcsMEw5LjY4LDE0LDkuNSwxNEg5LjMxbC0uMi4wNS0uMDcsMEw5LDE0LjEzYS44OC44OCwwLDAsMC0uMTcuMTIuOTMuOTMsMCwwLDAtLjEzLjE1bC0uMDcuMDhMNi4wNiwxOC45LDMuOSwxNC41NGExLDEsMCwwLDAtMS44Ljg4bDMsNkExLDEsMCwwLDAsNiwyMkg2YTEsMSwwLDAsMCwuODctLjVsMi40Ny00LjMzLjU0LDEuMjJhMSwxLDAsMCwwLC45MS41OWgxMGExLDEsMCwwLDAsMC0yWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTIwLjc4LDcuMTVIMTEuNDRMMTAuMzYsOS41N3MwLC4wNi0uMDYuMDlhMSwxLDAsMCwxLS4xMi4xN0wxMCwxMHMwLC4wNi0uMDguMDcsMCwwLS4wNywwYS42LjYsMCwwLDEtLjE5LjA2LjU3LjU3LDAsMCwxLS4xOCwwLC42MS42MSwwLDAsMS0uMTksMGwtLjIsMC0uMDcsMEw5LDEwLDguNzgsOS45bC0uMTMtLjE1YS43MS43MSwwLDAsMC0uMDctLjA5TDYuMDYsNS4yNSwzLjksOS42MWExLDEsMCwwLDEtMS44LS44OWwzLTZBMSwxLDAsMCwxLDYsMi4xMkg2YTEsMSwwLDAsMSwuODcuNTFMOS4zNCw3bC41NC0xLjIxYTEsMSwwLDAsMSwuOTEtLjU5aDEwYTEsMSwwLDAsMSwwLDJaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMjEsMTQuOTJIMTIuNjlhMSwxLDAsMCwxLDAtMkgyMWExLDEsMCwwLDEsMCwyWiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTIxLDExLjIySDEyLjY5YTEsMSwwLDAsMSwwLTJIMjFhMSwxLDAsMCwxLDAsMloiLz48L3N2Zz4K',
    },
    {
      name: 'bid',
      domain:
        'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyNkE1ODc7fS5jbHMtMntmaWxsOiM3OTg4OTc7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5iaWR4MTwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjAuNzgsMTUuNDJIMTEuNDRMMTAuMzYsMTNzMC0uMDYtLjA2LS4wOWExLDEsMCwwLDAtLjEyLS4xNkEuNy43LDAsMCwwLDEwLDEyLjZzMCwwLS4wOC0uMDdsLS4wNywwLS4xOS0uMDctLjE4LDBhLjYxLjYxLDAsMCwwLS4xOSwwLC43My43MywwLDAsMC0uMi4wNUg5TDksMTIuNTVsLS4xNy4xMWExLDEsMCwwLDAtLjEzLjE2bC0uMDcuMDhMNi4wNiwxNy4zMSwzLjksMTNhMSwxLDAsMCwwLTEuOC44OWwzLDZhMSwxLDAsMCwwLC44Ny41Nkg2YTEsMSwwLDAsMCwuODctLjUxbDIuNDctNC4zMi41NCwxLjIxYTEsMSwwLDAsMCwuOTEuNmgxMGExLDEsMCwwLDAsMC0yWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTIxLDcuNDVIMTIuNjlhMSwxLDAsMCwwLDAsMkgyMWExLDEsMCwxLDAsMC0yWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTIxLDExLjM0SDEyLjY5YTEsMSwwLDAsMCwwLDJIMjFhMSwxLDAsMCwwLDAtMloiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yMSwzLjU2SDNhMSwxLDAsMCwwLDAsMkgyMWExLDEsMCwxLDAsMC0yWiIvPjwvc3ZnPgo=',
    },
    {
      name: 'ask',
      domain:
        'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNFRjUzNTA7fS5jbHMtMntmaWxsOiM3OTg4OTc7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5iaWR4MjwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjAuNzgsOC41OEgxMS40NEwxMC4zNiwxMXMwLC4wNi0uMDYuMDlhMSwxLDAsMCwxLS4xMi4xNi43LjcsMCwwLDEtLjE2LjE0czAsMC0uMDguMDdsLS4wNywwLS4xOS4wNy0uMTgsMGEuNjEuNjEsMCwwLDEtLjE5LDAsLjczLjczLDAsMCwxLS4yLS4wNUg5TDksMTEuNDVsLS4xNy0uMTFhMSwxLDAsMCwxLS4xMy0uMTZsLS4wNy0uMDhMNi4wNiw2LjY5LDMuOSwxMS4wNWExLDEsMCwwLDEtMS44LS44OWwzLTZBMSwxLDAsMCwxLDYsMy41Nkg2YTEsMSwwLDAsMSwuODcuNTFMOS4zNCw4LjM5bC41NC0xLjIxYTEsMSwwLDAsMSwuOTEtLjZoMTBhMSwxLDAsMCwxLDAsMloiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yMSwxNi41NUgxMi42OWExLDEsMCwwLDEsMC0ySDIxYTEsMSwwLDAsMSwwLDJaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjEsMTIuNjZIMTIuNjlhMSwxLDAsMCwxLDAtMkgyMWExLDEsMCwwLDEsMCwyWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTIxLDIwLjQ0SDNhMSwxLDAsMCwxLDAtMkgyMWExLDEsMCwwLDEsMCwyWiIvPjwvc3ZnPgo=',
    },
  ];

  return (
    <Col className="w-auto lg:w-[270px] h-[920px]  border border-slate-300 rounded">
      <Tab.Group>
        <Tab.List className="flex bg-gray-50 space-x-1 p-1">
          {bidAskIcon.map((item, i) => (
            <Tab key={i}>
              {({ selected }) => (
                <button className={`border  py-[2px] px-[6px] w-8 h-7 ${selected ? 'bg-blue-50  border-blue-400' : 'bg-white'}`}>
                  <img src={item.domain} alt={item.name} />
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
