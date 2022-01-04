import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom';
import Trailer from './Trailer';

const Details = ({movieData}) => {
  const history = useHistory();
  const { id } = useParams();
  console.log(movieData)
  const movieDetail = movieData.filter((movies) => movies.id === id);
  console.log(id)
  console.log(movieDetail)

  
    return (
        <div>
          
          <Card.Body>
          <Card.Title>{movieDetail.name}</Card.Title>
          <img src={movieDetail.image} alt="this is a movie poster" />
          <Card.Text >
          {movieDetail.description}
          </Card.Text>
          <div className="DISC-BTNS">
          <Button className="GoBack-BTN" variant="dark" onClick={() => history.goBack()}>Home</Button>
          <Trailer trailerURL={movieDetail.trailerURL}/>
        </div>
  </Card.Body>
        </div>
    )
}

export default Details
