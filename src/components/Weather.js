import React from "react";
import Card from 'react-bootstrap/Card';

class Weather extends React.Component {
  render() {
    console.log(this.props.weatherData);


    let weather = this.props.weather.map((day, idx) => (
      <Card>
      <Card.Body>{this.props.city}{this.props.description}{this.props.date}</Card.Body>
    </Card>
    ))
    return (
      [weather]
    );
  }
}

  
export default Weather;