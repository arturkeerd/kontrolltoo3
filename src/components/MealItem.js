import { props } from "react";

const MealItem = (props) => {
    return (
        <li>
            <article className="meal-item">
                <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name}/>
                <div>
                    <h3>{props.meal.name}</h3>
                    <p className="meal-item-price">{props.meal.price}</p>
                    <p className="meal-item-description">{props.meal.description}</p>
                </div>
                <p>
                    <button >Add to Cart</button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem