import React from "react";
import { Link } from "react-router-dom";
import Marquee from "./Marque";
import logo from '../assets/logolume.png'

const Navbar = ({cartItem}) => {
  console.log(cartItem);
  return (
    <div>
    <div className="soft">
      <div className="shop">
        <Link to='/'>
        <img src={logo} alt="" id="logo" />
         <h2>
          <span>LUMEVILLE</span>STORE
        </h2> 
        </Link>
      </div>

      <div className="link">
        <ul>
          
          <li>
            <Link to="Products">Products</Link>
          </li>
          <li>
            <Link to="Carts">🛒Cart({cartItem.length})</Link>
          </li>
          <li>
            <Link to="About">About</Link>
          </li>
          <button>LOG IN</button>

          <li>
            <Link to="Products">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
    <Marquee/>
    </div>
  );
};

export default Navbar;
