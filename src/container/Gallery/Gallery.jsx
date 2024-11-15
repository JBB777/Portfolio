import './Gallery.scss';
import projects from '../../datas/projects.json';
import Card from '../../components/Card/Card';

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2 className="gallery__title">Projets</h2>
      <div className="gallery__container">
        {projects.map((project) => {
          return (
            <Card
              key={project.id}
              title={project.title}
              cover={project.cover}
              tags={project.tags}
              description={project.description}
              repo={project.repo}
              url={project.demo}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Gallery;
