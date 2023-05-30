import React from "react";
import "./Bg.scss";
import heroImg from "../../assets/inv-img.png";


const Background = () => {
  return (
    <div className="home">
      <section className="container hero">
        <div className="hero-text">
          <h2>Inventory {"&"} Stock Management Solution</h2>
          <p>
            Inventory system to control and manage proucts in the warehouse in
            real timeand integrated to make it easier to develop your business.
          </p>
         
        
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Inventory" />
        </div>
      </section>
    </div>
  );
};


export default Background;
