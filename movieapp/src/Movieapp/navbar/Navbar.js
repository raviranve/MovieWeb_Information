import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { searchMovies } from "../features/movie/movieSlice";
import { Home } from "../component/movie/Home";
import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.movie.searchResults);
  console.log(searchResults);

  const res = localStorage.getItem("user");
  const user = JSON.parse(res);

  const navigate = useNavigate();

  const handleSearch = async () => {
    if (searchTerm.trim() !== "") {
      await dispatch(searchMovies(searchTerm));
      if (searchResults) {
        navigate("/movieList/");
      } else {
        navigate("/");
      }
    }
  };

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <>
      <div className="nav-container">
        <div className="nav-left">
          <h2 className="nav-h2">Movie Theater</h2>
        </div>
        <div class="nav-search">
          <input
            type="text"
            class="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Movies"
          />
          <button className="nav-btn" onClick={handleSearch} type="submit">
            Search
          </button>
        </div>
        <div className="nav-user">
          <img
            className="navmen-image"
            src={`http://localhost:9000${user?.profilepic}`}
          ></img>
          {user?.name ? <h3 className="userName">{user?.name}</h3> : navigate("/")}
          <button className="logout-btn">
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </button>
        </div>
            <div className="nav-menuIcon">{<IoMenu/>}</div>
      </div>
      <Home />
    </>
  );
};
