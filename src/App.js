import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home'
import Products from './Products'
import About from './About'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
