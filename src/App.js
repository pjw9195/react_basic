import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './movie';

const movieTitles = ['Matrix', 'Full Metal Jacket', 'Oldboy', 'Star Wars'];

const movieImages = [
  'http://2korea.hani.co.kr/files/attach/images/64/981/316/001.jpg',
  'http://image.yes24.com/momo/TopCate1936/MidCate002/193514261.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3zD87lp1lNjdI5zP71yXMNOKU0e39yUveuQuEU4l8MJeclXgP',
  'https://vignette.wikia.nocookie.net/starwars/images/1/12/TheLastJediTheatricalPoster.jpg/revision/latest?cb=20171014042219&path-prefix=ko',
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} />
        <Movie title={movieTitles[3]} poster={movieImages[3]} />
      </div>
    );
  }
}

export default App;
