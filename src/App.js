import './App.css';
import Main from './components/Main';
import About from './components/About';
import Search from './components/Search';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <h1>Welcome to City Explorer</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="about" element={<About />} />

          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;