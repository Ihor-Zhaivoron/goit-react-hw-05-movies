import { Routes, Route } from 'react-router-dom';
import Home from 'path/Home/Home';
import { Layout } from './Layout/Layout';
// import NotFound from 'path/to/pages/NotFound';
import { lazy, Suspense } from 'react';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const Movies = lazy(() => import('../page/Movies/Movies'));
const MovieDetails = lazy(() => import('../page/MovieDetails/MovieDetails'));
export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </Suspense>
  );
};
