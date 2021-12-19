import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Search(props) {
  return (
    <div className="relative px-2">
      <input onChange={props.onChange} className="py-1 px-2  w-full rounded border border-slate-200 focus:outline-none placeholder:text-stone-400" type="text" placeholder="Cari Coin" />
      <FontAwesomeIcon className="absolute  top-[6px] right-[18px] text-stone-400" icon={faSearch} />
    </div>
  );
}

export default Search;
