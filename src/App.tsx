import { useState } from 'react';
import MovieList from './MovieList';
import { movies } from './movies';

export default function App() {
  const [movieList, setMovieList] = useState(movies);

  const clearMovieList = () => {
    setMovieList([]);
  };

  return (
    <main style={{ maxWidth: '760px', margin: '0 auto', padding: '24px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Мой каталог любимых фильмов</h1>

      <p>
        <strong>Количество фильмов:</strong> {movieList.length}
      </p>

      <button type="button" onClick={clearMovieList} style={{ marginBottom: '20px' }}>
        Очистить список
      </button>

      <MovieList movieList={movieList} />
    </main>
  );
}
