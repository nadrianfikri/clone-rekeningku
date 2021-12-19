import Stat from '../atoms/Stat';

function StatList(props) {
  return (
    <>
      <Stat name="Harga Terakhir" price={props.lastPrice} percent={props.percent} />
      <Stat name="High 24 Jam" price={props.highPrice} />
      <Stat name="Low 24 Jam" price={props.lowPrice} />
      <Stat name="Volume 24 Jam" price={props.vol} />
    </>
  );
}

export default StatList;
