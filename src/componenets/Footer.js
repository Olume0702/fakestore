import React from "react";
import "../style/Footer.css";



const Footer = () => {
  return (
    <div className="footer">
      <div className="foot">
        <h6>Products</h6>
        <p>
          Jewelries <br /> Electronics <br /> Clothings <br />Shoes <br /> Cars
        </p>
      </div>

      <div className="foot">
        <h6>Learn</h6>
        <p>
          Help center <br /> Blog
        </p>
      </div>

      <div className="foot">
        <h6>Contacts</h6>
        <p>
          hello@lumestore.com <br /> <br /> support@lumestore.com
        </p>
       
      </div>

      <div className="foot">
        <h6>Company</h6>
        <p>
          About Us <br /> Careers <br /> Rates <br /> Mobile
        </p>
      </div>

      <div className="foot">
        <h6>Legal</h6>
        <p>
          Privacy Policy <br />
          Laundering <br />
          Terms and Conditions
        </p>
      </div>

     
    </div>
  );
};

export default Footer;
