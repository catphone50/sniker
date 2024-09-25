import { useState } from "react";
import News from "../News";
import styled from "./styles.module.css";
import ProductCard from "../ProductCard";

function Main() {
  const [productsList, setProductsList] = useState([]);

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
