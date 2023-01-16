import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { eazyLazy } from 'services/eazyLazy';

const Cast = eazyLazy('Cast');
const MovieDetails = eazyLazy('MovieDetails');
const Movies = eazyLazy('Movies');
const Reviews = eazyLazy('Reviews');
const Home = eazyLazy('Home');
export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies"> Movies</Link>
      </nav>
      <br />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
