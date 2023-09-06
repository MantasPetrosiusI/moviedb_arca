import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import MovieDetails from "./components/MovieDetails";
import Navigation from "./components/Navigation";
import React from "react";

function App() {
  return (
    <div className="app">
      <main className="main-content">
        {<Navigation />}
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
