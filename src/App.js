import './App.css';
import React,{useState} from 'react'
import {MovieList} from './Components/MovieList';
import {movieData } from './Components/Data';
import {BrowserRouter, Route, Switch } from 'react-router-dom/';
import Details from './Components/Details';
import MyFooter from './Components/Footer';
import Navbar from './Components/Navb';

function App() {
  const [movies, setMovies] = useState(movieData);
  const [inputSearch, setInputSearch] = useState("");
  const [starRate, setStarRate] = useState(0);
   const add = (newMovie) => {
     setMovies ([...movies,newMovie])
   }

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar add= {add}
      inputSearch={inputSearch} setInputSearch={setInputSearch}
      starRate={starRate} setStarRate={setStarRate} />
      <Switch>
        <Route exact path="/">
        <MovieList className="MovieList" movies={movies} inputSearch={inputSearch} starRate={starRate} />
        </Route>

        <Route path="/details/:id">
        <Details movieData={movies} />
        </Route>
      </Switch>
      <MyFooter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
