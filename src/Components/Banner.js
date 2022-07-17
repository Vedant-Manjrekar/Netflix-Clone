import React from "react";
import axios from "../axios";
import requests from "../requests";

const base_URL = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [randomMovie, setRandomMovie] = React.useState([]);

  const [displayBanner, setDisplayBanner] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);

      console.log(Math.ceil(Math.random() * request.data.results.length - 1));

      setRandomMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log(randomMovie);

  const banner_style = {
    backgroundSize: "cover",
    backgroundImage: `url(${base_URL}${randomMovie?.backdrop_path})`,
    backgroundPosition: "center center",
    height: "78vh",
  };

  return (
    <header className="banner" style={banner_style}>
      <div className="banner--content">
        <p>
          {randomMovie?.name ||
            randomMovie?.title ||
            randomMovie?.original_name}
        </p>

        <div className="banner--overview">{randomMovie?.overview}</div>

        <div className="banner--buttons">
          <button className="banner--btn">Play</button>
          <button className="banner--btn">My List</button>
        </div>
      </div>
      <div className="banner--fade"></div>
    </header>
  );
}

export default Banner;
