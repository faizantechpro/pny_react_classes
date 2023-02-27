import React from 'react'

const Products = (props) => {
    const { products, onAdd } = props;
    //console.log(products);
  return (
    <div className='container'>
        <h1 className='text-center display-3'>List of All Products</h1>
        <div className='row'>
            {
                products.map((prod) => (
                    <div className='col-md-4'>
              <div className="card">
  <img src={prod.image} style={{ height:'300px' }} className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">{prod.name}</h5>
    <p className="card-text">{prod.price}</p>
    <button onClick={() => onAdd(prod)} href="#" className="btn btn-primary">Add to Cart</button>
  </div>
</div>

                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Products