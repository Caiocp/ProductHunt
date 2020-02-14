import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Main() {
  const [products, setproducts] = useState([]);
  const [productInfo, setproductsinfo] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get(`/products?page=${page}`);

      const { docs, ...productsInfo } = data;
      setproductsinfo(productsInfo);
      setproducts(docs);
    }
    loadProducts();
  }, [page]);

  function prevPage() {
    if (page === 1) return;

    setPage(page - 1);
  }

  function nextPage() {
    if (page === productInfo.pages) return;

    setPage(page + 1);
  }

  return (
    <div className="products-list">
      {products.map(product => (
        <article key={product._id}>
          <strong>{product.title}</strong>
          <p>{product.description}</p>

          <Link to={`/products/${product._id}`}>Acessar</Link>
        </article>
      ))}
      <div className="actions">
        <button disabled={page === 1} onClick={prevPage}>
          Anterior
        </button>
        <button disabled={page === productInfo.pages} onClick={nextPage}>
          Próximo
        </button>
      </div>
    </div>
  );
}
