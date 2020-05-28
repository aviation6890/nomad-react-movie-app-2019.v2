import React from "react";
import PropType from "prop-types";

function Movie({ id, year, title, summary, poster }) {
  return <h4>{title}</h4>;
}

Movie.PropType = {
  id: PropType.string.isRequired,
  year: PropType.number.isRequired,
  title: PropType.string.isRequired,
  summary: PropType.string.isRequired,
  poster: PropType.string.isRequired,
};

export default Movie;
