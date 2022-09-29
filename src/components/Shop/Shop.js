import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Product from "../product/Product";
import logo from './player-1.png'
import "./Shop.css";
const Shop = () => {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [Products, setProducts] = useState([]);
const [breakTime,setBreakTime]=useState(0)
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleClick = (product) => {
    const newCart = [...cart, product];
    let totalTime = 0;
    for (let i = 0; i < newCart.length; i++) {
      const product = newCart[i];
      totalTime = totalTim + Number(product.time);
    }
    setTotal(totalTime);
    setCart(newCart);
  };
  console.log(cart);
  return (
    <div className="shop-container">
      <div className="products-container">
        {Products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleClick={handleClick}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <div className="person-info">
          <div className="">
            <img height={60 } src={logo} alt="" />
            <h3>Sahadat Arefin</h3>
            <div>
              <p>
                <small>Dhaka bangladesh</small>
              </p>
            </div>
          </div>
        </div>
        <div className="person">
          <div>
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
        <div className="break">
          <h2>Add A Break</h2>
        </div>
        <div className="Add-A-Break">
          <div className="add-btn">
            <button onClick={()=>setBreakTime(10)}>
              10 <span>m</span>
            </button>
            <button onClick={()=>setBreakTime(20)}>
              20 <span>m</span>
            </button>
            <button onClick={()=>setBreakTime(30)}>
              30 <span>m</span>
            </button>
            <button onClick={()=>setBreakTime(40)}>
              40 <span>m</span>
            </button>
          </div>
        </div>

        <div className="Details">
          <h2>Exercise Details</h2>
          <div className="Exercise-time">
            <p>Exercise time: {total}</p>
          </div>
          <div className="Exercise-time">
            <p>Break time:{breakTime}</p>
          </div>
        </div>
        <button className="active-btn">Activity Completed</button>
      </div>
      <div>
        <Blog></Blog>
      </div>
    </div>
  );
};

export default Shop;
