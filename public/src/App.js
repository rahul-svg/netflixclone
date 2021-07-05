import React from 'react';
import './App.css';
import Header from "./Header";
import Banner from './Banner';
import Row from './Row';
import requests from './request';

function App() {
  return (
    <div className="App">
     <Header />
     <Banner />
     <Row
     isLargeRow = {true}
     title = "NETFLIX ORIGINALS"
     fetchUrl={requests.fetchNetflixOriginals}
     
     />
     <Row
     title = "Trending"
     fetchUrl={requests.fetchTrending}
     />

<Row
     title = "TopRated"
     fetchUrl={requests.fetchTopRated}
     />
 <Row
     title = "ActionMovies"
     fetchUrl={requests.fetchActionMovies}
     />
     <Row
     title = "ComedyMovies"
     fetchUrl={requests.fetchComedyMovies}
     />
     <Row
     title = "HorrorMovies"
     fetchUrl={requests.fetchHorrorMovies}
     />
    <Row
     title = "RomanceMovies"
     fetchUrl={requests.fetchRomanceMovies}
     />

<Row
     title = "Documentaries"
     fetchUrl={requests.fetchDocumentaries}
     />
     
     

    </div>
  );
}

export default App;
