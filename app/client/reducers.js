import { combineReducers } from 'redux';
import movies from './components/movies/movies-reducer';
import movie from './components/movieCard/movie-reducer';

export default combineReducers({
  movies,
  movie
})
