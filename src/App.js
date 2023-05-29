import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import './App.css';
import searchIcon from './search.svg';

const API_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=670536f2';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setsearchTerm] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('spiderman')
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input placeholder="Search movie here" value={searchTerm} onChange={(e) => setsearchTerm(e.target.value)}/>
                <img src={searchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
            </div>

            {
                movies?.length > 0
                ? (
                <div className="container">
                    {
                        movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                </div>
                ) : (
                <div className="empty">
                    <h2>No Movies Found</h2>
                </div>
                )
            }

        </div>
    );
}

export default App;