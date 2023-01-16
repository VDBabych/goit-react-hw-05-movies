import { FilmList } from 'components/FilmList/FilmList';
import { useEffect } from 'react';
import { useState } from 'react';
import { getTrendingMovies } from 'services/apiRequests';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const effectAction = async () => {
      try {
        const data = await getTrendingMovies();
        console.log(data);
        setMovies(data.results);
      } catch (error) {}
    };
    effectAction();
  }, []);
  if (movies.length === 0) return;
  return <FilmList movies={movies} />;
};
