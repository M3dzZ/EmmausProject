import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const AsteroidLookup = () => {
  const baseURL = "http://localhost:8000/asteroid/";
  const navigate = useNavigate();
  const location = useLocation();
  const { asteroid } = location.state;
  const { id } = useParams();
  const [nextApproachDates, setNextApproachDates] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}?id=${id}`).then((response) => {
      setNextApproachDates(response.data);
    });
  }, []);

  return (
    <div>
      <button onClick={() => navigate(-1)}>back to list</button>
      <br />
      <br />
      {asteroid.name}'s 5 last approach dates are:
      <br />
      {nextApproachDates.map((approach) => {
        return <p>{approach.close_approach_date_full}</p>;
      })}
    </div>
  );
};

export default AsteroidLookup;
