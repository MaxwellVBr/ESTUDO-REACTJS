import "./Home.css";

// Custom Hook
import { useFetch } from "../hook/useFetch";

// Pages
import Product from "./Product";

import { Link } from "react-router-dom";

const Home = () => {
  // 3 - carregamento de dados
  const url = "http://localhost:3000/products";

  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <h1>Produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      <ul className="products">
        {items &&
          items.map((product) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>R$: {product.price}</p>
              {/* 4  - rota dinamica */}
              <Link to={`/products/${product.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
