import { combineReducers } from 'redux';
import movies from './components/movies/movies-reducer';
import comments from './components/comments/comments-reducer';
import movie from './components/MovieCard/movie-reducer';
import user from './components/common/UserPanel/user-reducer';

export default combineReducers({
  movies,
  comments,
  movie,
  user,
})
