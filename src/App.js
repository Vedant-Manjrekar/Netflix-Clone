import Row from "./Components/Row";
import requests from "./requests";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

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
    </div>
  );
}

export default App;
