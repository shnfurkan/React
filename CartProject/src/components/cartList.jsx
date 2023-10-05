import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "../styles/cartList.css"

function cartList() {

    const {carts} = useSelector((state) => state.menu)
    const [totelPrice, setTotelPrice] = useState(0)

      const addedTotelPrice = () => {

        let newValue = 0;

        carts.forEach((value) => {
            newValue += value.quantity * value.price;
      });
            setTotelPrice(newValue);
      }

      useEffect(() => {
        addedTotelPrice();
      },[carts]);

    return (  
        <>
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
  <div>
        <p className="totelPriceText">Totel Price: ${totelPrice}</p>
  </div>
        </>
    );
}

export default cartList;
