import React from "react";
import PropType from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie_data">
        <h3 className="moive__title">{title}</h3>
        <h5 className="moive__year">{year}</h5>
        <p className="moive__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.PropType = {
  id: PropType.string.isRequired,
  year: PropType.number.isRequired,
  title: PropType.string.isRequired,
  summary: PropType.string.isRequired,
  poster: PropType.string.isRequired,
};

export default Movie;
