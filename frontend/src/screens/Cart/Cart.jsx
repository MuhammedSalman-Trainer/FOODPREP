import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";
import {assets} from '../../assets/assets'

const Cart = () => {
  const { cartItems, food_list, removeFromCart , getTotalCartAmount,url,addToCart} = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p className="food-image">Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Modify</p>
        </div>
        <br />
        <hr />
        {food_list.map((food, index) => {
          if (cartItems[food._id] > 0)
            return (
              <>
                <div className="cart-items-title cart-items-item">
                  <img className="food-image" src={url+"/images/"+food.image} alt="" />
                  <p>{food.name}</p>
                  <p>₹{food.price}</p>
                  <p>{cartItems[food._id]}</p>
                  <p>₹{cartItems[food._id] * food.price}</p>
                  <div className="food-item-counter cart-counter">
                        <img className='remove-icon' onClick={() => removeFromCart(food._id)} src = {assets.remove_icon_red}/>
                        <p>{cartItems[food._id]}</p>
                        <img className='add-icon' onClick={() => addToCart(food._id)} src={assets.add_icon_green} alt="" />
                    </div>
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
                    <p>₹{getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>₹{getTotalCartAmount()==0?0: 20}</p>
                </div>
                <hr/>
                <div className="cart-total-details">
                    <b>Total</b>
                    <b>₹{getTotalCartAmount()==0?0:getTotalCartAmount() +20}</b>
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
