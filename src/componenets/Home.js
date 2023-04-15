import React from "react";
import image1 from "../assets/apparel-gf75da4164_640.jpg";
import image2 from "../assets/footwear-g21537447b_640.jpg";
import image3 from "../assets/grocery-g459f74cd1_640.jpg";
import image4 from "../assets/hd-wallpaper-g360b0b49d_640.jpg";
import image5 from "../assets/shopping-g3716570ed_640.jpg";
import '../style/Home.css'

const Home = () => {
  return (
    <div className="home">
      <h2> Lumeville <span>Store</span> </h2>
      <div className="imggee">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
      </div>
    </div>
  );
};

export default Home;
