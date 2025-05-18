import { lazy, Suspense } from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';

const HomePage = lazy(() => import ('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import ('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));


function App() {


  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading more...</div>}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path="reviews" element={<MovieReviews />} />
          <Route path="cast" element={<MovieCast />} />
          </Route>
        <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
        </Suspense>
    </div>
  )
}

export default App
