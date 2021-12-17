import Stat from '../atoms/Stat';

function StatList(props) {
  return (
    <>
      {props.currentStat.map((item, i) => (
        <Stat key={i} name={item.name} price={item.price} percent={item.percent} />
      ))}
    </>
  );
}

export default StatList;
