import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';
function Favorites(){
    const{favorites} = useMovieContext();
    if(favorites){
        return (
          <div className='favorites'>
            <h2>Your Favorites</h2>
            <div className="movies-grid">
              {favorites.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </div>
          </div>
        );
    }

    return(
        <>
        <div className="favorites-empty">
            <h2>No  Favorties Movies yet </h2>
            <p>this your favourite page and here u all fav movies will be showed</p>
        </div>
        </>
    )
}

export default Favorites;