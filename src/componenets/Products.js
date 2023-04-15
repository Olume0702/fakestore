import React, { useState, useEffect } from "react";
import PulseLoader  from "react-spinners/PulseLoader";

import Jewelries from "./Jewelries";
import Men from "./Men";
import Electronic from "./Electronic";
import Women from "./Women";

const Products = ({cartItem,setCartItems}) => {


  return (
    <div className="data">
     <Jewelries cartItem={cartItem} setCartItems={setCartItems} />
     <Women  cartItem={cartItem} setCartItems={setCartItems}/>
     <Men  cartItem={cartItem} setCartItems={setCartItems}/>
     <Electronic  cartItem={cartItem} setCartItems={setCartItems}/>
    </div>
  );
};

export default Products;