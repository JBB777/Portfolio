import { BrowserRouter as Router } from 'react-router-dom';

import Profil from './container/Profil/Profil';
import Gallery from './container/Gallery/Gallery';
import Skills from './container/Skills/Skills';
import Footer from './components/Footer/Footer';
import Contact from './container/Contact/Contact';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <>
      <Router>
        <main>
          <Profil />
          <Gallery />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
