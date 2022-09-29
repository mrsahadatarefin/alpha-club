import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import'./Shop.css'

const Shop = () => {
    const [Products , setProducts] =useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className='products-container'>
{
Products.map(product=> <Product
  key={product.id}
  product={product}
  
  ></Product>)   
}
            </div>
            <div className='cart-container'>
<h1>order</h1>
            </div>
        </div>
        
    );
};

export default Shop;