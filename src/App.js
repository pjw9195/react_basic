import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './movie';

const movies = [
  {
    title: 'Matrix',
    poster: 'http://2korea.hani.co.kr/files/attach/images/64/981/316/001.jpg',
  },
  {
    title: 'Full Metal Jacket',
    poster: 'http://image.yes24.com/momo/TopCate1936/MidCate002/193514261.jpg',
  },
  {
    title: 'Oldboy',
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3zD87lp1lNjdI5zP71yXMNOKU0e39yUveuQuEU4l8MJeclXgP',
  },
  {
    title: 'Star Wars',
    poster:
      'https://vignette.wikia.nocookie.net/starwars/images/1/12/TheLastJediTheatricalPoster.jpg/revision/latest?cb=20171014042219&path-prefix=ko',
  },
];
class App extends Component {
  state = {
    greeting: 'Hello!',
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        greeting: 'Hello again',
      });
    }, 5000);
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map((movie, index) => (
          <Movie title={movie.title} poster={movie.poster} key={index} />
        ))}
      </div>
    );
  }
}

export default App;
