import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom"; // 🔧 CHANGED
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { popularMovies, latestMovies, comedyMovies } from "./Url";
import Movies from "./Movies";
import Banner from "./Banner";
import Movie_detail from "./Movie_detail";
import SearchResult from "./SearchResult";
import { AnimatePresence } from "framer-motion";   // ✅ ADDED
import PageWrapper from "./PageWrapper";           // ✅ ADDED

import { createContext, useState } from "react";

const Movie_context = createContext();

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movie, setmovie] = useState([]);
  const [showpages, setshowpages] = useState(true);

  const location = useLocation(); // ✅ ADDED

  return (
    <Movie_context.Provider value={{ movie, setmovie }}>
      {showpages && (
        <>
          <Header setSearchQuery={setSearchQuery} />
          <Banner movielist={latestMovies} />
        </>
      )}

      {/* 🔥 PAGE TRANSITION WRAPPER */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}> {/* 🔧 CHANGED */}

          <Route path="/" element={<Navigate to="/popular" />} />

          <Route
            path="/popular"
            element={
              <PageWrapper> {/* ✅ ADDED */}
                <Movies
                  movielist={popularMovies}
                  title="Popular Movies"
                  searchQuery={searchQuery}
                />
              </PageWrapper>
            }
          />

          <Route
            path="/latest"
            element={
              <PageWrapper> {/* ✅ ADDED */}
                <Movies
                  movielist={latestMovies}
                  title="Latest Movies"
                  searchQuery={searchQuery}
                />
              </PageWrapper>
            }
          />

          <Route
            path="/comedy"
            element={
              <PageWrapper>
                <Movies
                  movielist={comedyMovies}
                  title="Comedy Movies"
                  searchQuery={searchQuery}
                />
              </PageWrapper>
            }
          />

          <Route
            path="/search"
            element={
              <PageWrapper> 
                <SearchResult searchQuery={searchQuery} />
              </PageWrapper>
            }
          />

          <Route
            path="/detail"
            element={
              <PageWrapper>
                <Movie_detail setshowpages={setshowpages} />
              </PageWrapper>
            }
          />

        </Routes>
      </AnimatePresence>
    </Movie_context.Provider>
  );
}

export default App;
export { Movie_context };
