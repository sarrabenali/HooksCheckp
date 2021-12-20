import './App.css';
import React,{useState} from 'react'
import {MovieList} from './Components/MovieList';
import {movieData } from './Components/Data';
import AddMovie from './Components/AddMovie';
import {Navbar, Nav, Container} from 'react-bootstrap'
import Filter from './Components/Filter';
import Ratingstar from './Ratingstar';
import Footer from './Components/Footer';


function App() {
  const [movies, setMovies] = useState(movieData);
  const [inputSearch, setInputSearch] = useState("");
  const [starRate, setStarRate] = useState(0);
   const add = (newMovie) => {
     setMovies ([...movies,newMovie])
   }

  return (
    <div className="App">
      
      <Navbar className="nav">
      <Container className="liste">
        <Navbar.Brand href="#home"><h1>choose your film </h1></Navbar.Brand>
        <Nav className="me-auto">
          <AddMovie className ="addBtn" add={add}/>
          <Filter inputSearch={inputSearch} setInputSearch={setInputSearch}/>
          <div className="starsFilter" >
            <Ratingstar isMovieRating={false} starRate={starRate} setStarRate={setStarRate} />
          </div>
        </Nav>
      </Container>

      </Navbar>
      <div className={MovieList}>
        <MovieList movies={movies} inputSearch={inputSearch} starRate={starRate}/>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
