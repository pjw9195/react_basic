import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './movie';

class App extends Component {
  state = {};
  componentDidMount() {
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
  }
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => (
      <Movie title={movie.title} poster={movie.poster} key={index} />
    ));
    return movies;
  };
  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
