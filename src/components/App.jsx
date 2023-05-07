import { Routes, Route } from 'react-router-dom';
import Home from 'path/to/pages/Home';
import Movies from 'path/to/pages/Movies';
import NotFound from 'path/to/pages/NotFound';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
