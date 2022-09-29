import React from 'react';
import "./Product.css"

const Product = (props) => {
    const {image,name,age,time}=props.product;
    const {product,handleClick}=props;
   
    
    return (
        <div className='product'>
            
            
          <img src={image} alt=""/>
          <div className='product-info'>
          <h3>{name}</h3>
          <p> For Age :{age}</p>
          <p>Time required :{time}s</p>
          
          </div>
          <button onClick={()=>props.handleClick(product)}  className='btn-cart'>
           <p>Add to list</p> </button>
          
        </div>
      
    );
};

export default Product;