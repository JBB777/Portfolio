import { Link } from 'react-router-dom';

import logoGitBlanc from '../../assets/images/github-mark-white.svg';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <p>© 2024 - Jean-Baptiste Besançon.</p>
      <div className="footer__networks">
        <Link to={'https://github.com/JBB777'}>
          <img src={logoGitBlanc} alt="Logo Githhub"></img>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
