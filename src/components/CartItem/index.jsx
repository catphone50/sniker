import removeIcon from "../../assets/icons/basket.svg";
function CartItem({ id, name, price, image }) {
  return (
    <div style={{ border: "2px solid", maxWidth: "max-content" }}>
      <img src={image} alt="product_image" />
      <h3>{name}</h3>
      <p>Цена</p>
      <p>{price} E</p>
      <img src={removeIcon} alt="remove_icon" />
    </div>
  );
}
export default CartItem;
