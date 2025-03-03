import { Link } from 'react-router-dom';
import './Gallery.scss';
import projects from '../../datas/projects.json';
import Card from '../../components/Card/Card';

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2 className="gallery__title">Mes projets</h2>
      <div className="gallery__container">
        {projects.map((project) => {
          return (
            <Card
              key={project.id}
              title={project.title}
              cover={project.cover}
              alt={project.alt}
              tags={project.tags}
              description={project.description}
              repo={project.repo}
              url={project.demo}
            />
          );
        })}
        <div className="gallery__gitLink">
          <Link
            to={'https://github.com/JBB777?tab=repositories'}
            target="_blank"
          >
            + sur Git.
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
