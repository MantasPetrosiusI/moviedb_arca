import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import MovieDetails from "./components/MovieDetails";
import Navigation from "./components/Navigation";
import React from "react";
import NotFound from "./components/NotFound";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="app">
      <main className="main-content">
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/search/:keyword" element={<SearchPage />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
