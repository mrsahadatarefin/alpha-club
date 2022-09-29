import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import "./player-1.png"
import'./Shop.css'

const Shop = () => {
    const [cart,setCart]= useState([]);
    const [Products , setProducts] =useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handleClick=(product)=>{
        const newCart =[...cart,product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
{
Products.map(product=> <Product
  key={product.id}
  product={product}
  handleClick={handleClick}
  
  ></Product>)   
}
            </div>
            <div className='cart-container'>
                <div className='person-info'><div >
<img src="player-1.png" alt=""  />
    <h3>Sahadat Arefin</h3>
    <div><p><small>Dhaka bangladesh</small></p></div></div>

    
</div>
<div className='person'>
<div >
    <p>60kg</p>
    <p>Weight</p>
</div>
<div>
    <p>6</p>
    <p>Height</p>
</div>
<div>
    <p>21yrs</p>
    <p>Age</p>
</div>
    
</div>
<div className='break' ><h2>Add A Break</h2></div>
<div className='Add-A-Break'>

    
    <div className='add-btn'>
        <button>10 <span>m</span></button>
        <button>20 <span>m</span></button>
        <button>30 <span>m</span></button>
        <button>40 <span>m</span></button>
    </div>



</div>

<div className='Details'>
<h2>Exercise Details</h2>
<div className='Exercise-time'>
    <p>Exercise time:</p>
</div>
<div className='Exercise-time'>
    <p>Break time:</p>
</div>
</div>
<button className='active-btn'>Activity Completed</button>

            </div>
        </div>
        
    );
};

export default Shop;