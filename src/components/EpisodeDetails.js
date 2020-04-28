import React from "react";

const EpisodeDetails = ({ setIsHomePage, movie }) => {
  return (
    <>
      <h2>Details for {movie.episode}</h2>
      <div className="card">
        <h3>{movie.Episode}</h3>
        <img src={movie.image} height="350px" alt="movie-pic" />
        <p>{movie.Summary}</p>
        <p>{movie.ReleaseDate}</p>
      </div>
      <div className="cast">
        <h3>{movie.Cast.Name}</h3>
        {console.log(movie.Cast.image)}
        {/* <img src={movie.Cast.image} height="350px" alt="movie-pic" /> */}
        {movie.Cast.image.map((image) => (
          <>
            <img
              src={image}
              key={image}
              height="250px"
              alt="cast-pic"
              className="actors"
            />
          </>
        ))}
      </div>
      <button className="home-button" onClick={() => setIsHomePage(true)}>
        Go Back To Home Page
      </button>
    </>
  );
};

export default EpisodeDetails;
