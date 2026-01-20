import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { imageUrl } from "./Url";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Movie_context } from "./App";
import { motion } from "framer-motion";

const Movies = ({ movielist, title, searchQuery }) => {
  // ✅ FIXED CONTEXT
  const { movie, setmovie } = useContext(Movie_context);

  const [movies, setmovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(movielist).then((res) => {
      setmovies(res.data.results);
    });
  }, [movielist]);

  const openDetails = (movie) => {
    navigate("/detail", { state: movie });
  };

  const filteredMovies = movies.filter((m) =>
    (m.title || "").toLowerCase().includes((searchQuery || "").toLowerCase())
  );

  return (
    <div
      style={{
        paddingTop: "40px",
        paddingBottom: "50px",
        backgroundColor: "#0b0f1a",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#00f2ff",
          marginBottom: "40px",
          textShadow: "0 0 10px rgba(0, 242, 255, 0.6)",
        }}
      >
        {title}
      </h2>

      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "50px",
          justifyContent: "center",
        }}
      >
        {filteredMovies.map((m) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{
              scale: 1.06,
              y: -8,
              
            }}
          >
            <Card
              style={{
                width: "18rem",
                background: "linear-gradient(180deg, #11162a, #0b0f1a)",
                color: "#e6f1ff",
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: "14px",
                border: "1px solid rgba(0, 242, 255, 0.25)",
                boxShadow: "0px 8px 20px rgba(0, 242, 255, 0.2)",
              }}
              onClick={() => openDetails(m)}
            >
             
              <Card.Img
                src={imageUrl + m.poster_path}
                style={{
                  height: "260px",
                  objectFit: "contain",
                  borderTopLeftRadius: "14px",
                  borderTopRightRadius: "14px",
                }}
              />

              
              <Card.Body
                style={{
                  background: "linear-gradient(180deg, #11162a, #0b0f1a)",
                  borderBottomLeftRadius: "14px",
                  borderBottomRightRadius: "14px",
                }}
              >
                <Card.Title style={{ textAlign: "center" }}>
                  {m.title}
                </Card.Title>

                <small
                  style={{
                    display: "block",
                    textAlign: "center",
                    color: "#9aa4bf",
                  }}
                >
                  📅 {m.release_date}
                </small>

                <div className="d-flex justify-content-center mt-3">
                  <Button
                    style={{
                      background:
                        "linear-gradient(90deg, #00f2ff, #ff2cdf)",
                      border: "none",
                      color: "#0b0f1a",
                      fontWeight: "bold",
                      boxShadow:
                        "0 0 12px rgba(0, 242, 255, 0.6)",
                      padding: "8px 18px",
                      borderRadius: "8px",
                    }}
                  >
                    Watch Trailer
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Movies;
