import React from "react";
import { Card } from "react-bootstrap";

class Movies extends React.Component {
  render() {
    return(
      <>
      {
        this.props.movie.map((movie,idx) => (
          <Card key={idx}>
            <Card.Body>
              <Card.Title>Movie Title: {movie.title}</Card.Title>
              <Card.Text>
              Overview: {movie.overview}
              </Card.Text>
              <Card.Text>
              Average votes: {movie.average_votes}
              </Card.Text>
              <Card.Text>
              Total votes: {movie.total_votes}
              </Card.Text>
              <Card.Text>
              Popularity: {movie.popularity}
              </Card.Text>
              <Card.Text>
                Released on: {movie.released_on}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  }
}
export default Movies;