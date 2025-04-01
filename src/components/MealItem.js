import { props , useContext } from "react";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import formatPrice from '../utils/formatPrice';


const MealItem = (props) => {
  const cartContext = useContext(CartContext);

  const addToCartHandler = () => {
    cartContext.addItem({
      id: props.meal.id,
      name: props.meal.name,
      price: props.meal.price,
    });
  };

  return (
    <li>
      <article className="meal-item">
        <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name} />
        <div>
          <h3>{props.meal.name}</h3>
          <p className="meal-item-price">{formatPrice(props.meal.price)}</p>
          <p className="meal-item-description">{props.meal.description}</p>
        </div>
        <div>
          <Button onClick={addToCartHandler}>Add to Cart</Button>
        </div>
      </article>
    </li>
  );
};

export default MealItem;