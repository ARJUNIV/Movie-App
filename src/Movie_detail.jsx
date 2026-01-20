import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { imageUrl } from "./Url";
import { useEffect } from "react";

const MovieDetails = ({setshowpages}) => {
  useEffect(() => {
    setshowpages(false)
    
  
    return () => {
      setshowpages(true)
      
    }
  }, [setshowpages])
  
  const { state } = useLocation();
  const Navigate = useNavigate();

  

 

  return (
    <div style={{ color: "white", padding: "40px", background: "#0f1115",textAlign:"center" }}>
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <br /><br />

      <img
        src={imageUrl + state.poster_path}
        style={{ width:"300px"}}
      />

      <h1>{state.title}</h1>
      <p>{state.overview}</p>
      <p>⭐ Rating: {state.vote_average}</p>
      <p>📅 Release: {state.release_date}</p>
    </div>
  );
};

export default MovieDetails;
