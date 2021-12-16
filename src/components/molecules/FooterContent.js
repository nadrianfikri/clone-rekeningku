import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from '../atoms/Direction';
import HelpLink from '../atoms/HelpLink';
import TextTitle from '../atoms/TextTitle';

export const Information = (props) => {
  return (
    <>
      {props.dataInfo.map((item, i) => (
        <Col key={i}>
          <TextTitle text={item[0]} />
          {item[1].map((list, idx) => (
            <HelpLink key={idx} to="/" list={list} />
          ))}
        </Col>
      ))}
    </>
  );
};

export const Legality = (props) => {
  return (
    <Col>
      <TextTitle text="Terdaftar dan Diawasi" />
      <div className="flex flex-wrap w-64 justify-between gap-4">
        {props.dataLogo.map((item, i) => (
          <img key={i} className="h-[75px]" src={item.link} alt={item.name} />
        ))}
      </div>
    </Col>
  );
};
export const CorporateIdentity = (props) => {
  return (
    <Col className="space-y-3 -translate-y-2">
      <p className="text-logo font-semibold text-white">{props.name}</p>
      <p className="text-sm">
        <span className="text-xs">&copy;</span> {props.copyright}
      </p>
      <div className="flex justify-between">
        {props.sosmed.map((item, i) => (
          <a href={props.link} target="_blank" rel="noreferrer">
            <FontAwesomeIcon key={i} icon={item.icon} className=" text-white/40 hover:text-white text-3xl transition-all " />
          </a>
        ))}
      </div>
    </Col>
  );
};
