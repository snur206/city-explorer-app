import React from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
let ACCESS_KEY = process.env.REACT_APP_KEY

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: false,
      locationData: [],
      city: '',
    }
  }
  cityEntree = (e) => {
    this.setState({
      city: e.target.value,
      isError: false
    })
  }
  handleLocationSearch = async (e) => {
    e.preventDefault();
    let request = {
      method: 'GET',
      url: `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_KEY}&q=${this.state.city}&format=json`
    }
    try {
      let response = await axios(request);
      console.log(response.data[0])
      this.setState({
        locationData: response.data[0],
      });

    } catch (err) {

      // eslint-disable-next-line no-unused-expressions
      
        this.setState({ error: err.response.data })
      
    }
  }

  handleError = () => {
    this.setState({ error: null });
  }
  render() {
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

        <p>{this.state.locationData.display_name}</p>
        <li>{this.state.locationData.lat}</li>
        <li>{this.state.locationData.lon}</li>
        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${this.state.locationData.lat},${this.state.locationData.lon}`} alt={this.state.locationData.display_name} />

      </>
    )
  }
}


export default Main;