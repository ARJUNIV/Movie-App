import axios from "axios";
import React, { useEffect, useState } from "react";
import { imageUrl, popularMovies } from "./Url";

const Banner = () => {
  const [moviee, setMoviee] = useState(null); 

  useEffect(() => {
    axios.get(popularMovies).then((res) => {
      const results = res.data.results;

      // pick a random movie on each refresh
      const randomIndex = Math.floor(Math.random() * results.length);
      setMoviee(results[randomIndex]); 
    });
  }, []);

  return (
    <div
      style={{
        height: "60vh",
        objectFit: "contain",
        backgroundImage: moviee?.backdrop_path
          ? `url(${imageUrl + moviee.backdrop_path})`
          : "linear-gradient(to right, #000, #333)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <div style={{ maxWidth: "700px" }}>
        <h1>{moviee?.title}</h1>
        <p>{moviee?.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
