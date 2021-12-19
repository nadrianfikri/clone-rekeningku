import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Button(props) {
  return (
    <button className={` p-2 rounded-md ${props.className}`} type={props.type} onClick={props.onClick}>
      {props.text}
      {props.children}
    </button>
  );
}

export const SortButton = (props) => {
  return (
    <button className={`text-gray-500 text-xs font-bold ${props.className}`} type="button" onClick={props.onClick}>
      {props.text}
      {props.children}
      <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
    </button>
  );
};
