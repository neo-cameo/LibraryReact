import Footer from './components/Footer';
import Nav from './components/Nav'
import Books from './pages/Books';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/books' Component={Books}/>
        </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
