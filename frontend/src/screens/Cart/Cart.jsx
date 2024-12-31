import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart , getTotalCartAmount,url} = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((food, index) => {
          if (cartItems[food._id] > 0)
            return (
              <>
                <div className="cart-items-title cart-items-item">
                  <img src={url+"/images/"+food.image} alt="" />
                  <p>{food.name}</p>
                  <p>${food.price}</p>
                  <p>{cartItems[food._id]}</p>
                  <p>${cartItems[food._id] * food.price}</p>
                  <p onClick={() => removeFromCart(food._id)} className="cross"> x </p>
                </div>
                <hr />
              </>
            );
        })}    

      </div>
      < div className="cart-bottom">
        <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
                <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>${getTotalCartAmount()==0?0:2}</p>
                </div>
                <hr/>
                <div className="cart-total-details">
                    <b>Total</b>
                    <b>${getTotalCartAmount()==0?0:getTotalCartAmount() + 2}</b>
                </div>
            </div>
            
            <button onClick={() => navigate('/order')}>Proceed to Checkout</button>
        </div>
        <div className="cart-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
                <input type="text" placeholder="Enter promo code" />
                <button>Apply</button>
            </div>
        </div>
      </div>
    </div>

  );
};

export default Cart;
