import "./Home.css";
import React from "react";
import fictionalPlants from "../../../assets/data/data";
import { useState } from "react";

const Home = () => {
  const [plants, setPlants] = useState(fictionalPlants);

  console.log(plants);

  return (
    <>
      <h1>My Garden</h1>
      <h2>Home</h2>

      <h3>Plants</h3>
      <div className="plants-container">
        {plants.map((plant) => (
          <div className="card">
            <img className="pic" src={plant.bild} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>{plant.farbe}</p>
            <p>{plant.standort}</p>
            <p>{plant.besonderheit}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
