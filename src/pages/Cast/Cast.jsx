import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'services/apiRequests';

export const Cast = () => {
  const [castData, setCastData] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
    const effectAction = async () => {
      try {
        const data = await getCastById(movieId);
        setCastData(data?.cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    effectAction();
  }, [movieId]);
  if (!castData) return;
  if (castData.length === 0) {
    return <p>There is no cast information</p>;
  }
  return (
    <ul>
      {castData.map(({ cast_id, character, name, profile_path }) => (
        <li key={cast_id}>
          <img
            src={
              profile_path && `https://image.tmdb.org/t/p/w500/${profile_path}`
            }
            width={250}
            alt="poster"
          />
          <h5>{name}</h5>
          <p>{`Character: ${character}`}</p>
        </li>
      ))}
    </ul>
  );
};
