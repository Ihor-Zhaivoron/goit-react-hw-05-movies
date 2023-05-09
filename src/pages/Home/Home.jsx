import { useState, useEffect } from 'react';
import { getTrendingMovie } from '../../api';
import { MoviesList } from 'components/MoviesList/MoviesList';

import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovie().then(setMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul className={css.list}>
        <MoviesList movies={movies} />
      </ul>
    </>
  );
};
export default Home;
