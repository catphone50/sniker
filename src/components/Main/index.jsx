import { useEffect, useState } from "react";
import News from "../News";
import styled from "./styles.module.css";
import ProductCard from "../ProductCard";
import axios from "axios";
const URL = "https://66ced76a901aab24841fcad5.mockapi.io//productData";

function Main() {
  const [productsList, setProductsList] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(URL);
      setProductsList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styled.container}>
      <News />
      <section className={styled.title}>
        <h3>Товары</h3>
      </section>
      <section className={styled.products}>
        {productsList.map((cartItem) => {
          return <ProductCard key={cartItem.id} {...cartItem} />;
        })}
      </section>
    </div>
  );
}

export default Main;
