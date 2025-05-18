import MovieDetails from "../../components/MovieDetails/MovieDetails";
import BackButton from "../../components/BackButton/BackButton";
import { fetchMovieInfo } from "../../services/movieServices";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import css from './MovieDetailsPage.module.css'

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = useRef(location.state) ?? '/movies';
    const [movieInfo, setMovieInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    setIsLoading(true);
    fetchMovieInfo(movieId)
      .then(data => setMovieInfo(data))
      .finally(() => setIsLoading(false));
  }, [movieId]);


    return (
        <div>
            <BackButton to={backLinkHref.current} />
            {isLoading && <p>Loading...</p>}
            {movieInfo && <MovieDetails movieInfo={movieInfo} />}
            <ul className={css.list}>
                <li>
                    <NavLink className={css.link} to="cast">Cast</NavLink>
                </li>
                <li>
                    <NavLink className={css.link } to="reviews">Reviews</NavLink>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}