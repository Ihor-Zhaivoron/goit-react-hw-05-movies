import { useState, useEffect } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { searhMovie } from 'api';
import css from './Movies.module.css';

const Movies = () => {
  const location = useLocation();
  const [searhParams, setSearhParams] = useSearchParams();
  const query = searhParams.get('query') ?? '';

  const [input, setInput] = useState(query);
  const [films, setFilms] = useState([]);

  const changeFilter = e => {
    e.preventDefault();
    const { value } = e.target.search;
    setSearchParams(value !== '' ? { query: value } : '');
  };
  useEffect(() => {
    if (query === '') {
      setFilms([]);
      return;
    }
    searchMovie(query).then(setFilms);
  }, [query]);
  return (
    <>
      <div>
        <form action="" onSubmit={changeFilter} className={css.form}>
          <input
            type="text"
            name="search"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <ul className={css.list}>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`${film.id}`} state={{ from: location }}>
              {film.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Movies;
