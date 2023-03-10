import React from 'react'

const Cart = (props) => {
    const { cartItems, onAdd, onRemove } = props;

    //getting the prices of products
    const itemsPrice = cartItems.reduce((a,c) => a + c.qty * c.price,0);
    
    //calculating the shipping charges
    const shippingPrice = itemsPrice > 2500 ? 0 : 200;

    //calculating the 1% tax on total price
    const taxPrice = itemsPrice * 0.01;

    //calculating final price
    const finalPrice = itemsPrice + shippingPrice + taxPrice;
  return (
    <div className='container'>
        <h1 className='text-center display-2'>Cart</h1>
        {cartItems.length === 0 ? 
        <h1 className='text-center display-5'>Your Cart is Empty</h1> : (
        <table className='table table-bordered table-striped'>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Add Quantity</th>
                <th>Total Quantity</th>
                <th>Remove Quantity</th>
            </tr>
            {
                cartItems.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td><img src={item.image} style={{ width:'120px', height:'120px' }} /></td>
                        <td>{item.price}</td>
                        <td><button onClick={() => onAdd(item)} className='btn btn-outline-primary btn-sm'>+</button></td>
                        <td>{item.qty}</td>
                        <td><button onClick={() => onRemove(item)} className='btn btn-outline-danger btn-sm'>-</button></td>
                    </tr>
                ))
            }
        </table>
        )}
        <p>Actual Price: <b>{itemsPrice}</b></p>
        <p>Tax Added: <b>{taxPrice}</b></p>
        <p>After adding Shipping charges & Tax: <b>{finalPrice}</b></p>
    </div>
  )
}

export default Cart