import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import ProductList from './routes/productList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>menu</h1>
      <ul>
        <li>
          <a href="/">ホーム</a>
        </li>
        <li>
          <a href="/productList">紹介</a>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;