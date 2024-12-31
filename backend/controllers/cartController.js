const userModel = require('../model/userModel');

const addToCart = async (req, res) => {
    try{
        let userData = await userModel.findById(req.body.userId)
        let cartData = userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]=1
        }
        else{
            cartData[req.body.itemId]+=1    
        }

        await userModel.findByIdAndUpdate(req.body.userId, {cartData})
        res.status(200).json({success:true,message: "Item added to cart"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({success:false,message: "Internal Server Error"})
    }
}

const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = userData.cartData;
        res.status(200).json({success:true, cartData})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message: "Internal Server Error"})
    }
}

const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = userData.cartData;
        if(cartData[req.body.itemId]){
            cartData[req.body.itemId]-=1
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData})
        res.status(200).json({success:true,message: "Item removed from cart"})
    } catch (error) {
        res.status(500).json({success:false,message: "Internal Server Error"})
    }
}


module.exports = {
    addToCart,
    getCart,
    removeFromCart
}
