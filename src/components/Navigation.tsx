import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/Navigation.css";
import { fetchMovies } from "../redux/actions";
import { useAppDispatch } from "../redux/hooks";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter" && searchText.trim() !== "") {
        dispatch(fetchMovies(searchText));
        setSearchText("");
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [searchText, dispatch]);

  const handleSearchClick = () => {
    setSearchVisible((prevSearchVisible) => !prevSearchVisible);
    const input = document.getElementById("input-search") as HTMLInputElement;
    if (input && !searchVisible) {
      input.focus();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src="https://www.transparentpng.com/thumb/movie/gray-movie-written-icon-png-UpaYYD.png"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Text className="home">
          <Link to={"/"}>Home</Link>
        </Navbar.Text>
        <div className={`search-box`}>
          <i className={`bi bi-search`} onClick={handleSearchClick}></i>
          <Form.Control
            type="text"
            id="input-search"
            className={`input-search ${searchVisible ? "visible" : ""}`}
            placeholder="Type to search and press enter..."
            value={searchText}
            onChange={handleInputChange}
          />
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
