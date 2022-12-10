import React from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Weather from "./Weather";
import Movie from "./Movie";
let ACCESS_KEY = process.env.REACT_APP_KEY

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: false,
      locationData: [],
      city: '',
      error: null,
      weather: [],
      movie: [],
      latitude: '',
      longitude: ''
    }
  }
  cityEntree = (e) => {
    e.preventDefault();
    
      this.setState({
        city: e.target.value,
        
      });
    }

  
  handleLocationSearch = async (e) => {
    e.preventDefault();
    try {
      console.log('making request')
      // let response = await axios(request);
      let response = await axios.get(`https://us1.locationiq.com/v1/search?key=${ACCESS_KEY}&q=${this.state.city}&format=json`);
      console.log(response.data[0])
      this.setState({
        locationData: response.data[0],
        latitude: response.data[0].lat,
        longitude: response.data[0].lon
      }, () => this.weatherData(response.data[0].lat, response.data[0].lon), this.movieData());
    } catch (err) {
      console.log(err, 'here is the catch statement')

      // eslint-disable-next-line no-unused-expressions
      
        this.setState({ error: err.response.data })
      
    }
  }

  weatherData = async (lat, lon) => {
    console.log('inside weather function');
    let weather = await axios.get(`${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}`);
      console.log(weather);
      this.setState({
        weather: weather.data.data
      });
    } 
  
  movieData = async (e) => {
    let cityMovie = await axios.get(`${process.env.REACT_APP_SERVER}/movies?movieQuery=${this.state.city}`);
    console.log('here inside movie');
   
    let movieData = cityMovie.data;
    // console.log(movieData);
    this.setState({
        movie: movieData.data
      })
    } 

  

  handleError = () => {
    this.setState({ error: null });
  }
  render() {
    console.log(this.state.city);
    return (

      <>
        <Form onSubmit={this.handleLocationSearch}>
          <Form.Label>Search City</Form.Label>
          <Form.Control onInput={this.cityEntree} type="text" name="city" placeholder="enter city" />
          <Button type="submit">Explore!</Button>
        </Form>
        {this.state.error

          ? <Alert>
              {JSON.stringify(this.state.error)}
              <Button onClick={this.handleError}>Ok go away!</Button>
            </Alert>
          : null
        }
       {this.state.weather.length > 1 ? <Weather weather = {this.state.weather} city = {this.state.city}/>: null}  
        <p>{this.state.city}</p>
        <li>{this.state.latitude}</li>
        <li>{this.state.longitude}</li>
        {this.state.latitude && 
        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${this.state.latitude},${this.state.longitude}`} alt={this.state.locationData.display_name} />
        } 

        
      {this.state.movie.length > 1 && <Movie movie={this.state.movie} />
      }

      </>
    )
  }
}


export default Main;
