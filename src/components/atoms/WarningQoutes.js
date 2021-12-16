function WarningQoutes(props) {
  return (
    <section className={`text-xs font-serif text-justify ${props.className}`}>
      <p>
        <span className="font-bold uppercase">{props.highlight}</span> : {props.text}
      </p>
    </section>
  );
}

export default WarningQoutes;
