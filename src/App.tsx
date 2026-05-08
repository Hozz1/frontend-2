import { movies } from './movies';

export default function App() {
  return (
    <main style={{ maxWidth: '760px', margin: '0 auto', padding: '24px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Мой каталог любимых фильмов</h1>
      {movies.map((movie) => (
        <article key={`${movie.title}-${movie.year}`} style={{ marginBottom: '20px', padding: '12px', border: '1px solid #ddd' }}>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <p>
            <strong>Год выпуска:</strong> {movie.year}
          </p>
        </article>
      ))}
    </main>
  );
}
