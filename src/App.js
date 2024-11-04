import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';

import datas from './datas/projects.json';

const projet = datas[0];

function App() {
  return (
    <>
      <Router>
        <main>
          <Card
            title={projet.title}
            description={projet.description}
            tags={projet.tags}
            cover={projet.cover}
            link={projet.link}
          />
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
