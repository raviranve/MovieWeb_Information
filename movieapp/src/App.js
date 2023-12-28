import logo from "./logo.svg";
import { MovieList } from "./Movieapp/component/movie/MovieList";
import { MovieDetails } from "./Movieapp/component/movie/MovieDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./Movieapp/navbar/Navbar";
import { Login } from "./Movieapp/component/auth/Login";
import { SignUp } from "./Movieapp/component/auth/SignUp";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup/" element={<SignUp/>}></Route>
          <Route path="/navbar/" element={<Navbar />}></Route>
          <Route path="/movieList/" element={<MovieList />}></Route>
          <Route path="/moviesDetails/:id" element={<MovieDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
