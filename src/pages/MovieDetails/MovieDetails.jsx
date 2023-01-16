import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/apiRequests';

export const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const [movieData, setMovieData] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
    const effectAction = async () => {
      try {
        const data = await getMovieById(movieId);
        setMovieData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    effectAction();
  }, [movieId]);
  if (!movieData) return;
  return (
    <>
      <Link to={backLinkHref}>Go back</Link>
      <div>
        <img
          src={
            movieData.poster_path &&
            `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
          }
          width={250}
          alt="poster"
        />
        <h2>{`${movieData.title} (${new Date(
          movieData.release_date
        ).getFullYear()})`}</h2>
        <p>{`User score: ${Math.round(movieData.vote_average * 10)}%`}</p>
        <h3>Owerview</h3>
        <p>{movieData.overview}</p>
        <h4>Genres</h4>
        <ul>
          {movieData.genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
      <div>
        Additional information
        <ul>
          <li>
            <Link to="cast" state={{ from: backLinkHref }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};
