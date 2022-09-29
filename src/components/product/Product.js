import React from 'react';

const Product = (props) => {
    const {image,name,age,time}=props.product
    return (
        <div>
            
          <img src={image} alt=""></img>
          <h1>{name}</h1>
          
          
        </div>
      
    );
};

export default Product;