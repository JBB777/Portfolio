import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Profil from './container/Profil/Profil';
import Footer from './components/Footer/Footer';
import Gallery from './container/Gallery/Gallery';

function App() {
  return (
    <>
      <Router>
        <main>
          <Profil />
          <Gallery />
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
