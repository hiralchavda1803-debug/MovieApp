
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import "../App.css"
import movieBanner from "../assets/movie-benner.png"

function Movie() {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()
    const addedMovies = useSelector((state) => state.movies)

    const API = "https://ghibliapi.vercel.app/films"

    useEffect(() => {
        fetch(API)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("API Error")
                }

                return response.json()
            })
            .then((data) => {
                setMovies(data)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
                alert("Movies load nahi hui. Please try again.")
            })
    }, [])

    const allMovies = [...addedMovies, ...movies]

    const filteredMovies = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    )

    function handleLogout() {
        localStorage.removeItem("token")
        navigate("/")
    }

    function handleAddMovie() {
        navigate("/form")
    }

    return (
        <div className="movies-page">
            <nav className="navbar movie-navbar">
                <div className="container movie-nav-container">
                    <a href="#home" className="navbar-brand movie-brand">
                        <i className="bi bi-camera-reels-fill me-2"></i>
                        Movie<span>Hub</span>
                    </a>

                    <div className="movie-nav-links">
                        <a href="#home" className="movie-nav-link active">
                            <i className="bi bi-house-door me-2"></i>
                            Home
                        </a>

                        <a href="#movies" className="movie-nav-link">
                            <i className="bi bi-film me-2"></i>
                            Movies
                        </a>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                        <button
                            className="movie-add-btn"
                            onClick={handleAddMovie}
                        >
                            <i className="bi bi-plus-lg me-2"></i>
                            Add Movie
                        </button>

                        <button
                            className="movie-logout-btn"
                            onClick={handleLogout}
                        >
                            <i className="bi bi-box-arrow-right me-2"></i>
                            Logout
                        </button>
                    </div>
                </div>
            </nav>

            <section
                id="home"
                className="movie-hero"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            90deg,
                            rgba(5,11,24,0.9),
                            rgba(5,11,24,0.2)
                        ),
                        url(${movieBanner})
                    `
                }}
            >
                <div className="container">
                    <div className="movie-hero-content">
                        <span className="movie-tag">
                            <i className="bi bi-stars me-2"></i>
                            YOUR MOVIE DESTINATION
                        </span>

                        <h1>
                            Unlimited Movies,
                            <br />
                            <span>Unlimited Entertainment.</span>
                        </h1>

                        <p>
                            Discover amazing animated movies.
                            <br />
                            Explore stories, fantasy and adventure.
                        </p>

                        <a href="#movies" className="movie-explore-btn">
                            Explore Movies
                            <i className="bi bi-arrow-right ms-2"></i>
                        </a>
                    </div>
                </div>
            </section>

            <section id="movies" className="container movie-library">
                <div className="movie-section-header">
                    <div>
                        <h2>Popular Movies</h2>
                        <p>Discover movies you will love</p>
                    </div>

                    <div className="movie-search">
                        <i className="bi bi-search"></i>

                        <input
                            type="text"
                            placeholder="Search movies..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                {loading && (
                    <h5 className="text-center py-5">
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Loading Movies...
                    </h5>
                )}

                {!loading && (
                    <div className="row g-4">
                        {filteredMovies.map((movie) => (
                            <div
                                className="col-6 col-md-4 col-xl-2"
                                key={movie.id}
                            >
                                <div className="movie-item">
                                    <div className="movie-poster">
                                        <img
                                            src={movie.image}
                                            alt={movie.title}
                                            loading="lazy"
                                        />

                                        <span className="movie-rating">
                                            <i className="bi bi-star-fill"></i>
                                            {" "}{movie.rt_score || "N/A"}
                                            {movie.rt_score ? "%" : ""}
                                        </span>
                                    </div>

                                    <div className="movie-info">
                                        <h5 title={movie.title}>
                                            {movie.title}
                                        </h5>

                                        <p>
                                            {movie.release_date || "N/A"}
                                            {" "}•{" "}
                                            {movie.running_time || "N/A"} min
                                        </p>

                                        <button className="movie-details-btn">
                                            <i className="bi bi-play-fill me-1"></i>
                                            View Movie
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {filteredMovies.length === 0 && (
                            <div className="col-12 text-center py-5">
                                <i className="bi bi-film empty-icon"></i>

                                <h4 className="mt-3">No Movies Found</h4>

                                <p>Try another movie name.</p>

                                <button
                                    className="movie-add-btn"
                                    onClick={handleAddMovie}
                                >
                                    <i className="bi bi-plus-lg me-2"></i>
                                    Add Movie
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </section>

            <footer className="movie-footer">
                © 2026 MovieHub. Made for movie lovers 🎬
            </footer>
        </div>
    )
}

export default Movie
