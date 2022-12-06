import locationData from '../data/location.json';
// import axios from 'axios';
// const ACCESS_KEY = process.env.KEY_ACCESS_CODE;

// class Search extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       locationSearch: '',
//       restaurantData: restaurantData,
//       locationData: locationData
//     }
//   }

//   // this should query location IQ for geolocation data

//   render() {
//     return (
//       <div id="city-search">
//         <form>
//           <label>Search for location</label>
//           <input type="text" name="search" placeholder="Enter City here"/>
//           <button type="submit">Explore!</button>
//         </form>
//         {this.state.locationData 
//           ? <p>{this.state.locationData.display_name}</p>
//           : <p>Search for a city!</p>
//         }
//         {this.state.locationSearch && this.state.locationData
//           ? <div id="map"><img src={map} alt="location map"/></div>
//           : null
//         }
//         {this.state.locationSearch && this.state.restaurantData
//           ? <ul>{this.state.restaurantData.map(place => <li>{place.restaurant}</li>)}</ul>
//           : null
//         }
//       </div>
//     )
//   }
// }

// export default Search;
