import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AsteroidsList() {
  const baseURL = "http://localhost:8000/asteroids/";

  const [asteroids, setAsteroids] = useState([]);
  const [start_date, setStartDate] = useState("2022-10-10");
  const [end_date, setEndDate] = useState("2022-10-15");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${baseURL}?start_date=${start_date}&end_date=${end_date}`)
      .then((response) => {
        const near_earth_objects = response.data.near_earth_objects;

        const dates = Object.keys(near_earth_objects);
        const asteroids = [];

        dates.forEach((date) => {
          near_earth_objects[date].forEach((asteroid) => {
            asteroids.push(asteroid);
          });
        });

        setAsteroids(asteroids);

        setLoading(false);
      });
  }, [start_date, end_date]);

  return (
    <div>
      {loading && <div className="loading">Loading...</div>}

      <label htmlFor="start">Start date:</label>
      <input
        type="date"
        id="start"
        name="start_date"
        value={start_date}
        onChange={(event) => setStartDate(event.target.value)}
      ></input>

      <label htmlFor="end">End date:</label>
      <input
        type="date"
        id="end"
        name="end_date"
        value={end_date}
        onChange={(event) => setEndDate(event.target.value)}
      ></input>

      {asteroids.map((asteroid) => {
        return (
          <div key={asteroid.id}>
            <p>
              Asteroid name: {asteroid.name}
              <br />
              Asteroid distance from Earth:{" "}
              {parseInt(
                asteroid.close_approach_data[0].miss_distance.kilometers
              )}{" "}
              km
              <br />
              Asteroid estimated size: between{" "}
              {asteroid.estimated_diameter.kilometers.estimated_diameter_min.toFixed(
                3
              )}{" "}
              km and{" "}
              {asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(
                3
              )}{" "}
              km
              <br />
              Asteroid next close approach date:{" "}
              {asteroid.close_approach_data[0].close_approach_date_full}
              <br />
              <Link to={{ pathname: `/${asteroid.id}` }} state={{ asteroid }}>
                Look me up
              </Link>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default AsteroidsList;
