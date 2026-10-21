
import { useState } from "react"
import "../App.css"
import bgImage from "../assets/movie-bg.png"
import { useNavigate } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const Email = "hiralchavda1803@gmail.com"
    const Password = "12345"

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        if (email === Email && password === Password) {
            localStorage.setItem("token", "Login")
            alert("Login Successful")
            navigate("/movie")
        }
        else {
            alert("Invalid Email or Password")
        }
    }

    return (
        <div
            className="movie-page container-fluid d-flex justify-content-center align-items-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="movie-overlay"></div>

            <div className="movie-card">
                <div className="movie-logo">
                    <i className="bi bi-camera-reels-fill"></i>
                </div>

                <h2 className="movie-title">
                    Movie<span>Hub</span>
                </h2>

                <p className="movie-subtitle">
                    Login to your account
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">
                            <i className="bi bi-envelope-fill field-icon"></i>
                            Email Address
                        </label>

                        <input
                            type="email"
                            className="form-control movie-input"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label">
                            <i className="bi bi-lock-fill field-icon"></i>
                            Password
                        </label>

                        <input
                            type="password"
                            className="form-control movie-input"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn movie-btn w-100">
                        Login
                        <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                </form>

                <p className="movie-welcome">
                    Welcome to MovieHub
                    <i className="bi bi-camera-reels-fill ms-2"></i>
                </p>
            </div>
        </div>
    )
}

export default Login
