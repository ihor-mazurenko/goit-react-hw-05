import { useEffect, useState } from "react"
import MoviesList from "../../components/MovieList/MovieList";
import { Link } from 'react-router-dom';
import { fetchTrending } from "../../services/movieServices";
import toast from 'react-hot-toast';

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getTrending() {
            try {
                const data = await fetchTrending();
                setMovies(data);
            } catch (error) {
                toast.error(`Error fetching trending movies:`, error);
            };
        }
        getTrending();
    }, []);

    return (
        <div>
            <h2>Trending today</h2>
            <MoviesList movies={movies} />
        </div>
    )
}