import styled from "./styles.module.css";

function ProductCard(cartItem) {
  const handleAddToCart = () => {};

  return (
    <div className={styled.card}>
      <img src={cartItem.image} alt={cartItem.name} />
      <h4 className={styled.name}>{cartItem.name}</h4>
      <div className={styled.infoContainer}>
        <div className={styled.priceContainer}>
          <p className={styled.priceTitle}>PRICE:</p>
          <p className={styled.price}>{cartItem.price} EUR</p>
        </div>
        <button onClick={handleAddToCart} className={styled.button}>
          +
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
