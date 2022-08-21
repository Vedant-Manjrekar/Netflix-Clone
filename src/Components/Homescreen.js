import React from "react";
import Row from "./Row";
import requests from "../requests";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Homescreen() {
  return (
    <>
      <Navbar isUser="true" />

      <Banner />

      <Row
        title="Netflix Originals."
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now." fetchURL={requests.fetchTrending} />
      <Row title="Top Rated." fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies." fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies." fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies." fetchURL={requests.fetchHorrorMovies} />
      <Row title="Rom-Com." fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries." fetchURL={requests.fetchDocumantaries} />
      <Footer />
    </>
  );
}

export default Homescreen;
