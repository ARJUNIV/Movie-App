import React, { useEffect, useState } from "react";
import axios from "axios";
import { imageUrl, latestMovies, popularMovies } from "./Url";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const LatestMovies = () => {
  const [latest, setlatest] = useState([]);

  useEffect(() => {
    axios
      .get(latestMovies)
      .then((res) => setlatest(res.data.results));
  }, []);

  // Correct logging
  console.log(latest);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "50px", justifyContent: "center",background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", minHeight:"100vh",paddingTop: "60px",     // 👈 top space
    paddingBottom: "60px" }}>
      {latest.map((p) => (
        <Card key={p.id} style={{ width: "18rem" }}>

          <Card.Img
            variant="top"
            src={imageUrl + p.poster_path}
            style={{
              height: "250px",
              objectFit: "contain",
              backgroundColor: "#000"
            }}
          />

          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>{p.title}</Card.Title>
            <small
              style={{
                display: "block",
                textAlign: "center",
                color: "gray",
                marginBottom: "8px"
              }}
            >
              📅 {p.release_date}
            </small>
            <Card.Text style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textAlign: "center"
            }}>
              {p.overview}
            </Card.Text>


          </Card.Body>

        </Card>
      ))}
    </div>
  );
};

export default LatestMovies;