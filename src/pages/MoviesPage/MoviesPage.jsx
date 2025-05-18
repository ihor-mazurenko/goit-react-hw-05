import MovieSearch from "../../components/MovieSearch/MovieSearch"
import MoviesList from "../../components/MovieList/MovieList"
import { useSearchParams } from "react-router-dom"
import { fetchMovies } from "../../services/movieServices"
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function MoviesPage() {
    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const query = searchParams.get('query') ?? '';

    useEffect(() => {
        if (!query) return;
        async function fetchData() {
            try {
                const data = await fetchMovies(query);
                setMovies(data);
                const hasNoPoster = data.some(movie => movie.poster_path === null);
                if (hasNoPoster) {
                    toast('Some movies do not have posters available');
                }
            } catch (error) {
                toast.error('Error searching movies');
            }
        }
        fetchData();
    }, [query]);


    return (
        <div>
            <MovieSearch />
            {movies.length > 0 && <MoviesList movies={movies}/>}
        </div>
    )
}