import './Card.scss';
import Tag from '../Tag/Tag';
import { Link } from 'react-router-dom';

function Card({ title, tags, cover, description, repo, url }) {
  return (
    <div className="card">
      <img className="card__cover" src={cover} alt="screen du projet" />

      <div className="card__content">
        <h3>{title}</h3>
        <div className="card__tags">
          {tags.map((tag, index) => {
            return <Tag title={tag} key={index} />;
          })}
        </div>
        <p>{description}</p>
        <div className="card__link">
          <Link to={repo}>
            <span>Le code :</span>
            <img src="./images/github-mark-white.svg" alt="Logo Githhub"></img>
          </Link>
          <Link to={url}>
            <span>Le site</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
