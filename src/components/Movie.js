import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

class Movies extends React.Component {
  render() {
    // console.log(this.props.movie);
    return (
      <>
      <p>Movie:</p>
      {this.props.movie.map(data => {
        return (
            <Card style={{ width: '18rem' }}>
              <ListGroup variant='flush'>
                <ListGroup.Item><h4>Movie Options: {data.title}</h4></ListGroup.Item>
                <h5>Overview: {data.overview}</h5>
                <h5>Released on: {data.released_on}</h5>
                <h5>Average votes: {data.average_votes}</h5>
                <h5>Total votes: {data.total_votes}</h5>
                <h5>Image: {data.image_url}</h5>
                <h5>Popularity: {data.popularity}</h5>
              </ListGroup>
            </Card>
          )
        })}
        </>
    )
  }
}
export default Movies;
