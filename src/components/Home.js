import React, { useState } from "react";
import EpisodeDetails from "./EpisodeDetails";
import GalaxyCard from "./GalaxyCard";
import galaxyDatabase from "../galaxyDatabase";

const Home = () => {
  const [currentEpisode, setCurrentEpisode] = useState({});
  const [isHomePage, setIsHomePage] = useState(true);

  function updateEpisode(summary) {
    setCurrentEpisode(summary);
    setIsHomePage(false);
  }

  if (!isHomePage) {
    return (
      <div>
        <EpisodeDetails
          setIsHomePage={setIsHomePage}
          movie={currentEpisode}
        ></EpisodeDetails>
      </div>
    );
  }

  return (
    <div>
      <div className="main-content">
        {galaxyDatabase.map((movie) => (
          <GalaxyCard
            movie={movie}
            updateEpisode={updateEpisode}
            key={movie.id}
          ></GalaxyCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
