import './Carrousel.scss';
import projects from '../../datas/projects.json';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';

function Carrousel() {
  const length = projects.length;
  const [index, setIndex] = useState(0);

  /* Fct to change picture when user click on an arrow */
  function prevPicture() {
    setIndex(index === 0 ? length - 1 : index - 1);
  }

  function nextPicture() {
    setIndex(index === length - 1 ? 0 : index + 1);
  }

  return (
    <div className="carrousel">
      <h2>Mes projets</h2>
      <div className="carrousel__container">
        <img
          className="chevron chevron-left"
          src="./images/chevron-left-solid.svg"
          onClick={prevPicture}
        />
        <img
          className="chevron chevron-right"
          src="./images/chevron-right-solid.svg"
          onClick={nextPicture}
        />
        <div className="carrousel__project">
          <Card
            key={projects[index].id}
            title={projects[index].title}
            cover={projects[index].cover}
            tags={projects[index].tags}
          />
          <div>
            <p>{projects[index].description}</p>
            <Link to={projects[index].repo}>
              <img src="./images/github-mark.svg" alt="Logo Githhub"></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrousel;
