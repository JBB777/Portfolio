import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
