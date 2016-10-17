import { combineReducers } from 'redux';
import movies from './components/movies/movies-reducer';
import comments from './components/comments/comments-reducer';
import movie from './components/MovieCard/movie-reducer';

export default combineReducers({
  movies,
  comments,
  movie
})
