import { Link } from 'react-router-dom';

function DirectLink(props) {
  return (
    <p className=" text-xs space-x-1">
      <Link className="font-bold text-blue-500" to="/login">
        Masuk
      </Link>
      <span>atau</span>
      <Link className="font-bold text-blue-500" to="/register">
        Daftar Sekarang
      </Link>
      <span>{props.etc}</span>
    </p>
  );
}

export default DirectLink;
