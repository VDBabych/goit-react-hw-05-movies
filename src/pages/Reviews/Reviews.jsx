import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'services/apiRequests';

export const Reviews = () => {
  const [reviewsData, setReviewsData] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
    const effectAction = async () => {
      try {
        const data = await getReviewsById(movieId);
        setReviewsData(data?.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    effectAction();
  }, [movieId]);
  if (!reviewsData) return;
  if (reviewsData.length === 0) {
    return <p>There is no reviews</p>;
  }
  return (
    <ul>
      {reviewsData.map(({ id, author, content }) => (
        <li key={id}>
          <h5>{`Author: ${author}`}</h5>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
