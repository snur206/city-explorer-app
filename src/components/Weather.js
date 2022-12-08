import React from "react";
import Card from 'react-bootstrap/Card';

class Weather extends React.Component {
  render() {
    console.log(this.props.weather);


    let weather = this.props.weather.map((day, idx) => (
      <Card>
      <Card.Body>{day.city}{day.description}{day.date}</Card.Body>
    </Card>
    ))
    return (
      [weather]
    );
  }
}

  
export default Weather;