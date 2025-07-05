import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import {BsCartCheckFill } from 'react-icons/bs';



const Navbar = ({ setData ,cart}) => {
    // console.log(useLocation())
    const location = useLocation()
  const navigate = useNavigate();

 const [searchTerm, setSearchTerm] = useState("")

  const filterbyCategory = (category) => {
    const element = items.filter((product) => product.category === category);

    setData(element);
  };
  const filterbyPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element);
  };
  
  const handleSubmit =(e)=>{
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")

  }

  return (
    <>
      <header className="sticky-top">
        <div className="nav_bar">
          <Link to={"/"} className="brand">
            E-CART
          </Link>

          <form className="search_bar" 
          onSubmit={handleSubmit}>
            <input 
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            type="text" 
            placeholder="Search Products" />
          </form>

          <Link to={"/cart"} className="cart">
          <button type="button" className="btn btn-primary position-relative">
  <BsCartCheckFill style={{fontSize:"1.5rem"}}/>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
          </Link>
        </div>

         {  location.pathname=='/' && (
           <div className="nav-bar-wrapper">
          <div className="items">Filter by {"-->"}</div>
          <div onClick={() => setData(items)} className="items">
            No Filter
          </div>

          <div onClick={() => filterbyCategory("mobiles")} className="items">
            Mobiles
          </div>
          <div onClick={() => filterbyCategory("laptops")} className="items">
            Laptops
          </div>
          <div onClick={() => filterbyCategory("tablets")} className="items">
            Tablets
          </div>
          <div onClick={() => filterbyPrice(29999)} className="items">
            {">=29999"}
          </div>
          <div onClick={() => filterbyPrice(49999)} className="items">
            {">=49999"}
          </div>
          <div onClick={() => filterbyPrice(69999)} className="items">
            {">=69999"}
          </div>
          <div onClick={() => filterbyPrice(89999)} className="items">
            {">=89999"}
          </div>
          </div>
         )}
       
        
      </header>
    </>
  );
};

export default Navbar;
