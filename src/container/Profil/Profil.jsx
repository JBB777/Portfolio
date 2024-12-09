import { Link } from 'react-router-dom';
import './Profil.scss';
import CV from '../../datas/CV.pdf';

function Profil() {
  return (
    <section id="profil" className="profil">
      <div className="img-tape img-tape--2">
        <img
          src="./images/logo.png"
          alt="Logo initial de Jean-Baptiste Besançon"
        />
      </div>

      <div className="profil__txt">
        <h1>Jean-Baptiste Besançon</h1>
        <p>
          Bienvenue !!
          <br />
          Je suis un informaticien reconverti dans le développement web
          front-end. Actuellement en formation "Intégrateur Web" chez
          OpenClassrooms en vue d'une certification RNCP de niveau 5.
        </p>
        <a href={CV} target="_blank">
          Voir mon CV
        </a>
        <span className="profil__disponibilite">
          Disponible à partir de mars 2025.
        </span>
      </div>
    </section>
  );
}

export default Profil;
