import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//paginas
import App from "./App";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

import "./index.css"; //css global

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />    //url apena search, não precisa colocar parametro dinamico igual o 'movies'. A busca será baseada em querystring.
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

//João P. Soares & Fernando Friche.