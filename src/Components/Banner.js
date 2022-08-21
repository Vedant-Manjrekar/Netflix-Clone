import React from "react";
import axios from "../axios";
import requests from "../requests";
import TypeWriterEffect from "react-typewriter-effect";

const base_URL = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [randomMovie, setRandomMovie] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);

      setRandomMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  const app = document.getElementById("banner--overview");

  // console.log(randomMovie);

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
          <TypeWriterEffect
            textStyle={{ fontFamily: "Bebas Neue" }}
            startDelay={100}
            cursorColor="black"
            text={
              randomMovie?.name ||
              randomMovie?.title ||
              randomMovie?.original_name
            }
            typeSpeed={100}
            // scrollArea={myAppRef}
          />
        </p>

        <div className="banner--overview" id="banner--overview">
          {/* {randomMovie?.overview} */}

          <TypeWriterEffect
            textStyle={{ fontFamily: "Bebas Neue" }}
            startDelay={50}
            cursorColor="black"
            text={randomMovie?.overview}
            typeSpeed={50}
          />
        </div>
        {/* <div className="banner--overview"></div> */}

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
