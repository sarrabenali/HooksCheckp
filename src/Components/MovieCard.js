import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../App.css';
import MovieRatingstar from '../Ratingstar';

 const MovieCard = ({ movies }) => {
    return (
        <div >
            <div className="row">
            <Card className="movieCard" style={{ width: '18rem' }}>
                <img className="MovieCardImg" variant="top" src={movies.image} alt="poster"  />
                <Card.Body>
                    <Card.Title style={{height:50}}>{movies.name}</Card.Title>
                    <Card.Text>{movies.date}</Card.Text>
                    <Card.Text>{movies.type}</Card.Text>
                    <Card.Text style={{height:150}}>{movies.description}</Card.Text>
                    <div className='starRating' >
                    <MovieRatingstar isMovieRating={true} movieRating= {movies.rating}/>
                    </div>
               <Link to={`/details/${movies.id}`}> <Button variant="dark">Watch</Button> </Link>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}
export default MovieCard