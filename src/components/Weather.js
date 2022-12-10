import React from "react";
import Forcast from "./Forcast";

class Weather extends React.Component {
  render() {
    console.log(this.props.weather);
    console.log(this.props.city);

    let weather = this.props.weather.map((day, idx) => (
      <Forcast
        // description={day.description}
        day={day}
        key={idx}
        city={this.props.city}
        // date={day.date}
      />
    ))
    return (
      [weather]
    );
  }
}

  
export default Weather;