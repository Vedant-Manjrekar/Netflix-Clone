import React from "react";
import axios from "../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import { useEffect } from "react";

const base_URL = "https://image.tmdb.org/t/p/original";

export default function Row(props) {
  const [movies, setMovies] = React.useState([]);

  const [trailer, setTrailer] = React.useState();

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailer) {
      setTrailer("");
    } else {
      movieTrailer(movie?.title || movie?.original_name)
        .then((url) => {
          const URLparams = new URLSearchParams(new URL(url).search);
          setTrailer(URLparams.get("v"));
        })
        .catch((error) => console.log(error));
      console.log(movie.name, movie.title, movie.original_name);
    }
  };

  React.useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(props.fetchURL);

      setMovies(requests.data.results);

      return requests;
    }

    fetchData();
  }, [props.fetchURL]);

  useEffect(() => {
    const row = document.getElementById("row--poster");
    row?.scroll({ left: row.scrollWidth / 2 });
  }, [movies]);

  return (
    <>
      <div className="main--row" id="main--row">
        <div className="row--title">{props.title}</div>

        <div
          className={
            props.isLargeRow
              ? "row--poster--large row--posters1 "
              : "row--posters"
          }
          id="row--poster"
        >
          {movies.map((movie) => {
            return (
              <div className={`row--poster`} key={movie.id}>
                <img
                  onClick={() => handleClick(movie)}
                  src={`${base_URL}${movie.poster_path}`}
                  alt={movie.name}
                  key={movie.id}
                />
              </div>
            );
          })}
        </div>
      </div>

      {trailer && <Youtube videoId={trailer} opts={opts} />}
    </>
  );
}
