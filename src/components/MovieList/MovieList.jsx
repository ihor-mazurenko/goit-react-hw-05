import { Link, useLocation } from "react-router-dom";

export default function MoviesList({ movies }) {
    const location = useLocation();
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link
                        to={`/movies/${movie.id}`}
                        key={movie.id}
                        style={{ display: 'block' }}
                        state={location}
                    >
                        {movie.title}
                    </Link>
                </li>
            ))}
        </ul>    
    )
}