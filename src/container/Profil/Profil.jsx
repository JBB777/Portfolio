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
          <br />
          Je suis un informaticien reconverti dans le développement web
          front-end. Actuellement à la recherche d'une opportunité à la suite de
          ma formation "Intégrateur Web" chez OpenClassroom.
          <br />
          <br />
          Ouvert à toutes propositions me permettant d'évoluer dans un
          environnement propice à la montée en gamme dans mon métier, entouré de
          collègues ouvert aux partages de connaissances, entraides et moments
          de rigolades 😄.
          <br />
          <br />
          Conscient du chemin qu'il me reste à parcourir, je continue à me
          former pour être le meilleur <s>dresseur</s> développeur possible 😊.
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
