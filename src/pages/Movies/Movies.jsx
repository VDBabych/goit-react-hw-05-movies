import { FilmList } from 'components/FilmList/FilmList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/apiRequests';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query');
  useEffect(() => {
    if (!query) return;
    const effectAction = async () => {
      try {
        const data = await getMoviesByQuery(query);
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    effectAction();
  }, [query]);
  const submitAction = value => {
    setSearchParams({ query: value });
  };
  return (
    <>
      <SearchForm submitAction={submitAction} startInputText={query} />
      <FilmList movies={movies} />
      <Outlet />
    </>
  );
};
