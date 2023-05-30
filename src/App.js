import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./page/home/Home";
import Movie from "./page/movieDetail/movie";
import MovieList from "./components/movieList/MovieList";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h2>Error Page</h2>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
