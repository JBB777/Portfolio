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
          Hello !!
          <br />
          <br />
          Je suis un informaticien passioné par la technologie et
          l'informatique, reconverti dans le développement web front-end.
        </p>
        <a href={CV} target="_blank">
          Voir mon CV
        </a>
        <span className="profil__disponibilite">Disponible.</span>
      </div>
    </section>
  );
}

export default Profil;
