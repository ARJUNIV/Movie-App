import React from "react";

const SearchResult = ({ searchQuery }) => {   
  return (
    <div style={{ color: "white", padding: "50px", textAlign: "center" }}>
      <h2>Search Results for: "{searchQuery}"</h2>  
    </div>
  );
};

export default SearchResult;
