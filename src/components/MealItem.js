import { props , useContext } from "react";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

const MealItem = (props) => {

    const cartContext = useContext(CartContext)

    const formattedPrice = new Intl.NumberFormat(navigator.language, {
        style: "currency",
        currency: props.meal.currency || "EUR", // Default to EUR if no currency is provided
    }).format(props.meal.price);

    const formattedPriceWithSymbolAfter = formattedPrice.replace(/^(\D+)(\d.*)/, "$2 $1");

          const addToCartHandler = () => {
         cartContext.addItem({
             id: props.meal.id,
             name: props.meal.name,
             price: props.meal.price
         })
       }
    return (
        <li>
            <article className="meal-item">
                <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name}/>
                <div>
                    <h3>{props.meal.name}</h3>
                    <p className="meal-item-price">{formattedPriceWithSymbolAfter}</p>
                    <p className="meal-item-description">{props.meal.description}</p>
                </div>
                <div>
                    <Button onClick={addToCartHandler}>
                        Add to Cart
                    </Button>
                </div>
            </article>
        </li>
        
    )
}

export default MealItem