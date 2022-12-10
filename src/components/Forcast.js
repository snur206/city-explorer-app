import React from 'react'
import { Container, Card, } from 'react-bootstrap'
// import './Forcast.css';



class Forcast extends React.Component {

  render() {
    console.log(this.props.city)
    console.log(this.props.date);
    return (

      <Container>
        <Card className='forcast'>
          <Card.Body>
            <Card.Title>Weather in: {this.props.city} on: {this.props.day.time}</Card.Title>
            <Card.Text>{this.props.day.forecast}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}
export default Forcast;