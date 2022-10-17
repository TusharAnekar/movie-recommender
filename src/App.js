import React from "react";
import "./App.css";
import { useState } from "react";

const moviesDB = {
  drama: [
    { name: "Dil Chahta Hai", rating: "4.5/5" },
    { name: "The Kashmir Files", rating: "3/5" },
    { name: "Kabir Singh", rating: "4/5" },
    { name: "Chak De! India", rating: "4.5/5" },
  ],

  action: [
    { name: "Top Gun: Maverick", rating: "5/5" },
    { name: "Parmanu: The Story of Pokhran", rating: "3/5" },
    { name: "Captain America: Civil War", rating: "4/5" },
    { name: "Mission: Impossible - Fallout", rating: "4.5/5" }
  ],

  comedy: [
    { name: "Kung Fu Panda", rating: "5/5" },
    { name: "Lukka Chuppi", rating: "3.5/5" },
    { name: "Tanu Weds Manu", rating: "4/5" },
    { name: "Hera Pheri", rating: "5/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("comedy");

  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Good Movies</h1>
      <p>Checkout my favorite movies. Select a genre to get started</p>

      <hr></hr>

      <div>
        {Object.keys(moviesDB).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {moviesDB[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "50%",
                margin: "1rem auto",
                borderRadius: "0.5rem",
                color: "white"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>

      <footer>
      <h3>Connect with me here:</h3>
        <a class="footer-links" href="https://www.linkedin.com/in/tusharanekar/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a class="footer-links" href="https://twitter.com/TusharAnekar" target="_blank" r1el="noreferrer">Twitter</a>
        <a class="footer-links" href="https://github.com/TusharAnekar" target="_blank" rel="noreferrer">GitHub</a>
      </footer>

    </div>
  );
}