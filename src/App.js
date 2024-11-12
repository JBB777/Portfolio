import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Profil from './container/Profil/Profil';
import Footer from './components/Footer/Footer';
import Gallery from './container/Gallery/Gallery';
import Form from './components/Form/Form';

function App() {
  return (
    <>
      <Router>
        <main>
          <Profil />
          <Gallery />
          <Form />
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
