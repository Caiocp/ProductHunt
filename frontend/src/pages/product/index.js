import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";
import "./styles.css";

export default function Product() {
  const [product, setproduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/products/${id}`);
      setproduct(response.data);
    }
    fetchData();
  }, [id]);

  return (
    <div className="product-info">
      <h1>{product.title}</h1>
      <p>{product.description}</p>

      <p>
        URL:{" "}
        <a rel="noopener noreferrer" target="_blank" href={product.url}>
          {product.url}
        </a>
      </p>
    </div>
  );
}
