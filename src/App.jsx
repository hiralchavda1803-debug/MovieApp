import Login from "./components/login.jsx"
import Movie from "./components/movie.jsx"
import Form from "./components/form.jsx"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import { ProtectedRoute } from "./pages/validation.js"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/movie"
          element={
            <ProtectedRoute>
              <Movie />
            </ProtectedRoute>
          }
        />

        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  )
}

export default App