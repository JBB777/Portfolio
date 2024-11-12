import './Profil.scss';

function Profil() {
  return (
    <div id="profil" className="profil">
      <div className="img-tape img-tape--2">
        <img src="./images/grincheux.jpg" alt="Jean-Baptiste Besançon" />
      </div>

      <div className="profil__txt">
        <h1>Jean-Baptiste Besançon</h1>
        <p>
          Bienvenue !!
          <br />
          Je suis Jean-Baptiste, informaticien reconvertie dans le développement
          front-end.
        </p>
      </div>
    </div>
  );
}

export default Profil;
