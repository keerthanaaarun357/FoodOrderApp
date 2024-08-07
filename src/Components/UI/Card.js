
import "./Card.Module.css";

const Card = (props) => {
  return <div className="card">{props.children}</div>;
};

export default Card;