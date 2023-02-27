import React, { useState } from 'react'
import Cart from './components/Cart';
import Products from './components/Products';
import data from './data';

const App = () => {
  const { myproducts } = data;
  //hook for getting products into Cart
  const [ cartItems, setCartItems ] = useState([]);

  //function for adding product into cart
  const onAdd = (product) => {
    //checking if the product already exists into cart or not
    const exist = cartItems.find((x) => x.id === product.id);

    //if the new product id matches with any existing product
    if(exist){
      //increment the product quantity
      setCartItems(
        cartItems.map((x) => (
          x.id === product.id ? {...exist,qty:exist.qty + 1} : x
        )
        ));
      console.log(cartItems);
    }else{
      //if the product not matches then add the 1 quantity of new product by default
      setCartItems([...cartItems,{...product, qty:1}]);
      console.log(cartItems);
    }
  }

  //function to decrease the product quantity
  const onRemove = (product) => {
     //checking if the product already exists into cart or not
     const exist = cartItems.find((x) => x.id === product.id);

     //if we have at least 1 product quantity in the cart
     if(exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id));
     }else{
      setCartItems(cartItems.map((x) => (
        x.id === product.id ? {...exist,qty:exist.qty - 1} : x
      )))
     }
  }
  return (
    <div>
      <Products products={myproducts} onAdd={onAdd}/>
      <hr />
      <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
    </div>
  )
}

export default App