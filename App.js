import Footer from './components/Footer';
import Nav from './components/Nav'
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Home />
          <Footer />
      </div>
    </Router>
  );
}

export default App;
