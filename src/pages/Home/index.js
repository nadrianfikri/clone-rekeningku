import { Link } from 'react-router-dom';

function index() {
  return (
    <div className="bg-gray-400 min-h-scree text-3xl font-bold ">
      <p>Halaman Home</p>
      <Link className="text-red-200" to="/trade">
        Go to exchange
      </Link>
    </div>
  );
}

export default index;
