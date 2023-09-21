import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { addedCartActions, changeCartActions, changePizzasActions, deleteCartActions} from "../Api";
import "../styles/Menu.css"

function Menu() {
    const dispatch = useDispatch()
    const {datas,carts} = useSelector((state) => state.menu)

    const handleDecreasing = (event,id,title,description,img,price,quantity,category) => {
        event.preventDefault();

        if(quantity>0) {
            const newQuantity = quantity-1;

            const newPizzaDatas = {
                id:id,
                title:title, 
                description:description, 
                img:img, 
                price:price, 
                quantity:newQuantity, 
                category:category,
            };

            dispatch(changePizzasActions(newPizzaDatas,id));
            const inCart = carts.some((item)=>item.id === id);
            
            if(inCart) {
                dispatch(changeCartActions(newPizzaDatas,id));
            }

            if(newQuantity===0) {
                dispatch(deleteCartActions(id));
            }
        }
    }

    const handleIncreasing = (event,id,title,description,img,price,quantity,category) => {
        event.preventDefault();

    const newQuantity = quantity+1;

    const newPizzaDatas = {
        id:id,
        title:title, 
        description:description, 
        img:img, 
        price:price, 
        quantity:newQuantity, 
        category:category,
    };

    dispatch(changePizzasActions(newPizzaDatas,id));

    const inCart = carts.some((item)=>item.id === id);

    if(inCart) {
        dispatch(changeCartActions(newPizzaDatas,id));
    } else {
        dispatch(addedCartActions(newPizzaDatas));
    }

    }

    return (  
        <div>

            <div className="PizzaMenus">
  {datas.map((pizzas, index) => {
    return (
      <div className="pizza-card" key={index}>
        <img src={pizzas.img} alt={pizzas.title} className="pizza-image" />
        <div className="pizza-details">
          <h2 className="pizza-title">{pizzas.title}</h2>
          <p className="pizza-description">{pizzas.description}</p>
          <p className="pizza-price">${pizzas.price}</p>
          <div className="quantity-controls">
            <button onClick={(event) => handleDecreasing(event,pizzas.id,pizzas.title,pizzas.description,pizzas.img,pizzas.price,pizzas.quantity,pizzas.category)}>-</button>
            <p className="pizza-quantity">{pizzas.quantity}</p>
            <button onClick={(event) => handleIncreasing(event,pizzas.id,pizzas.title,pizzas.description,pizzas.img,pizzas.price,pizzas.quantity,pizzas.category)}>+</button>
          </div>
        </div>
      </div>
    );
  })}
</div>

{carts.length > 0 && <h1>CART:</h1>}
<div className="Cart">
  {carts.map((pizzas, index) => {
    return (
      <div className="cart-item" key={index}>
        <img src={pizzas.img} alt={pizzas.title} className="cart-item-image" />
        <div className="cart-item-details">
          <h2 className="cart-item-title">{pizzas.title}</h2>
          <p className="cart-item-description">{pizzas.description}</p>
          <p className="cart-item-price">Piece Price: ${pizzas.price}</p>
          <p className="cart-item-quantity">Quantity: {pizzas.quantity}</p>
        </div>
      </div>
    );
  })}
</div>
            
        </div>
    );
}

export default Menu;

