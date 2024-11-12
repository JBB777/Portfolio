import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Profil from './container/Profil/Profil';
import Gallery from './container/Gallery/Gallery';
import Skills from './container/Skills/Skills';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <main>
          <Profil />
          <Gallery />
          <Skills />
          <Form />
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
