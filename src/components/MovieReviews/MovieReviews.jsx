import css from './MovieReviews.module.css'
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../services/movieServices';
import { useEffect, useState } from 'react';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        const data = await fetchReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    }

    getReviews();
  }, [movieId]);

  if (reviews.length === 0) return <p>No reviews yet.</p>;

  return (
    <ul className={css.list}>
      {reviews.map(review => (
        <li key={review.id}>
          <h4>Author: {review.author}</h4>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}

