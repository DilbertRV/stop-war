import React from "react";
import "./notwar.css";
import Object from "./Object.js";

const NotWar = () => {
  return (
    <main>
      <section className="container">
        <div className="text">
          <h1 className="texture">STOP WAR.</h1>
        </div>
        <div className="object">
          <Object />
        </div>
        <p>
          "Damaged hands" 3D Model by: &nbsp;
          <a href="https://skfb.ly/orvuT" target="_blank" rel="noreferrer">
            Coffeek
          </a>
        </p>
      </section>
    </main>
  );
};

export default NotWar;
