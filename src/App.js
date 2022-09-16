import { Routes, Route } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import Home from './routes/home';
import ProductList from './routes/productList';
import SignUp from './routes/signUp'
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
        <li>
          <a href="/signUp">会員登録</a>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;