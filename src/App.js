import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './movie';

class App extends Component {
  state = {};
  componentDidMount() {
    this._getMovies();
  }
  _renderMovies = () => {
    const movies = this.state.movies.map(movie => (
      <Movie
        title={movie.title}
        poster={movie.large_cover_image}
        key={movie.id}
      />
    ));
    return movies;
  };
  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies,
    });
  };
  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
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
