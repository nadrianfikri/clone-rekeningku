import { Link } from 'react-router-dom';

function HelpLink(props) {
  return (
    <Link to={props.to} className="hover:text-white/80">
      {props.list}
    </Link>
  );
}

export default HelpLink;
