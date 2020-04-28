import React from "react";

const GalaxyCard = ({ updateEpisode, movie }) => {
  return (
    <div className="cards" onClick={() => updateEpisode(movie)}>
      <h3>{movie.Episode}</h3>
      <img src={movie.image} height="350px" alt="movie-pic" />
      <p>{movie.summary}</p>
      <p>{movie.ReleaseDate}</p>
    </div>
  );
};

export default GalaxyCard;
