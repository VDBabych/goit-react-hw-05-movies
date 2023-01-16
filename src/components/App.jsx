import { Routes, Route } from 'react-router-dom';
import { eazyLazy } from 'services/eazyLazy';
import { Nav } from './Nav/Nav';

const Cast = eazyLazy('Cast');
const MovieDetails = eazyLazy('MovieDetails');
const Movies = eazyLazy('Movies');
const Reviews = eazyLazy('Reviews');
const Home = eazyLazy('Home');
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
