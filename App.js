import Footer from './components/Footer';
import Nav from './components/Nav'
import Books from './pages/Books';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { books } from "./data";
import BookInfo from './pages/BookInfo';


function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books books={books}/>} />
          <Route path='/books/1' element={<BookInfo books={books}/>} />
        </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
