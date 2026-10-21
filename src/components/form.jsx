
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { AddData } from "../redux/action"

function Form() {

    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [img, setImage] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAdd = (e) => {
        e.preventDefault()

        const NewMovie = {
            title: title,
            img: img,
            year: year
        }

        dispatch(AddData(NewMovie))
        navigate("/movie")
    }

    return (
        <div className="container-fluid movie-form-bg">
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-12 col-md-8 col-lg-5">

                    <div className="card movie-form-card shadow-lg border-0">
                        <div className="card-body p-4 p-md-5">

                            <h2 className="text-center mb-2 fw-bold">
                                <span className="text-primary">+</span> ADD MOVIE
                            </h2>

                            <p className="text-center text-secondary mb-4">
                                Add your favourite movie details
                            </p>

                            <form onSubmit={handleAdd}>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Image URL
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Enter Image URL"
                                        value={img}
                                        onChange={(e) => setImage(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Movie Title
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Enter Movie Title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-semibold">
                                        Release Year
                                    </label>

                                    <input
                                        type="number"
                                        className="form-control form-control-lg"
                                        placeholder="Enter Movie Year"
                                        value={year}
                                        onChange={(e) => setYear(e.target.value)}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg w-100 fw-semibold"
                                >
                                    + Add Movie
                                </button>

                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Form
