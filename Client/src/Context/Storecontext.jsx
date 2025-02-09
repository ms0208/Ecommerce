import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/Frontend_Assets/all_product.js';


export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for(let index = 0 ; index < all_product.length+1 ; index++)
    {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) =>{

    const [Cartitems,setCartitems] = useState(getDefaultCart());


    const addtocart = (itemId) =>  {
        setCartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(Cartitems);
    }

    const removefromcart = (itemId) =>  {
        setCartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in Cartitems)
        {
            if(Cartitems[item]>0)
            {
                let iteminfo = all_product.find((product)=>product.id===Number(item));
                totalAmount += iteminfo.new_price * Cartitems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartitems = ()=>{
        let totalitem = 0;
        for(const item in Cartitems)
        {
            if(Cartitems[item]>0)
            {
                totalitem += Cartitems[item];
            }
        }
        return totalitem;
    }
    const contextValue = {all_product,Cartitems,addtocart,removefromcart,getTotalCartAmount,getTotalCartitems};
    return (
        <ShopContext.Provider value={contextValue}>
           {props.children} 
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;
