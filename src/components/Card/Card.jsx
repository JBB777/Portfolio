import './Card.scss';
import Tag from '../Tag/Tag';
import { Link } from 'react-router-dom';

function Card({ title, tags, cover, alt, description, repo, url }) {
  return (
    <div className="card">
      <img className="card__cover" src={cover} alt={alt} />
      <div className="card__content">
        <div className="card__content-title">
          <h3>{title}</h3>
          <div className="card__tags">
            {tags.map((tag, index) => {
              return <Tag title={tag} key={index} />;
            })}
          </div>
        </div>
        <div className="card__content-txt">
          <p>{description}</p>
          <div className="card__link">
            <Link to={repo} target="_blank">
              <span>Le code :</span>
              <img
                src="./images/github-mark-white.svg"
                alt="Logo Githhub"
              ></img>
            </Link>
            {url ? (
              <Link to={url} target="_blank">
                <span>Le site</span>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
