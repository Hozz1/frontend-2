import type { Movie } from './movies';

interface MovieListProps {
  movieList: Movie[];
}

export default function MovieList({ movieList }: MovieListProps) {
  return (
    <>
      {movieList.map((movie) => (
        <article key={`${movie.title}-${movie.year}`} style={{ marginBottom: '20px', padding: '12px', border: '1px solid #ddd' }}>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <p>
            <strong>Год выпуска:</strong> {movie.year}
          </p>
        </article>
      ))}
    </>
  );
}
