import React, { Component } from 'react';
import './movie.css';

class Movie extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>hello this is a movie</h1>
      </div>
    );
  }
}
class MoviePoster extends Component {
  render() {
    return (
      <img
        src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F9%2F9d%2FMockingjay_Part_2_Poster.jpg%2F220px-Mockingjay_Part_2_Poster.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FThe_Hunger_Games%3A_Mockingjay_%25E2%2580%2593_Part_2&docid=e8YHqTYbm6vQ3M&tbnid=--UnAmkj-OBMJM%3A&vet=10ahUKEwirvf3b0qLhAhUwE6YKHaPRAnQQMwg6KAQwBA..i&w=220&h=334&bih=744&biw=767&q=hungergame&ved=0ahUKEwirvf3b0qLhAhUwE6YKHaPRAnQQMwg6KAQwBA&iact=mrc&uact=8"
        alt=""
      />
    );
  }
}
export default Movie;
