import React from "react";
import axios from "../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_URL = "https://image.tmdb.org/t/p/original";

export default function Row(props) {
  const [movies, setMovies] = React.useState([]);

  const [trailer, setTrailer] = React.useState();

  React.useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(props.fetchURL);

      setMovies(requests.data.results);

      return requests;
    }

    fetchData();
  }, [props.fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  console.log(movies);

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

  return (
    <>
      <div className="main--row">
        <div className="row--title">{props.title}</div>

        <div className="row--posters">
          {movies.map((movie) => {
            return (
              <div
                className={`row--poster ${
                  props.isLargeRow && "row--poster--large"
                } `}
              >
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
