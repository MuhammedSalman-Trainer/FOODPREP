import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {

    const {cartItems,setCartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-image-container">
            <img className="food-item-image" src={url+"/images/"+image} alt="" />
            {
                !cartItems[id]?
                    <img className="add" onClick={() => addToCart(id) } src={assets.add_icon_white}/>
                    :<div className="food-item-counter">
                        <img className='remove-icon' onClick={() => removeFromCart(id)} src = {assets.remove_icon_red}/>
                        <p>{cartItems[id]}</p>
                        <img className='add-icon' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
            </div>
            <p className="food-item-desc">
                {description}
            </p>
            
            <div className="food-item-name-rating">
                <p className="food-item-price">
                    ₹{price}
                </p>
                <img src = {assets.rating_starts} alt=''/>
            </div>
            
        </div>
    </div>
  )
}

export default FoodItem