import './Card.scss';
import Tag from '../Tag/Tag';
import { Link } from 'react-router-dom';

function Card({ title, tags, cover }) {
  return (
    <div className="card-bg">
      <div className="card">
        <img src={cover} alt="screen du projet" />
        <div className="card__title">
          <div className="card__title-opacity"></div>
          <h3>{title}</h3>
          <div className="card__tags">
            {tags.map((tag, index) => {
              return <Tag title={tag} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
