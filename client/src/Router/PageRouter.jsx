
import { Routes, Route } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import Login from "../pages/Login"
import Dashboard from "../components/Dashboard/Dashboard"

 const PageRouter = () => {
    return(
        <Routes>
            <Route path="/"  element={ <LandingPage />} />
            <Route path="/login" element={ <Login /> } />
            <Route path="/dashboard" element={ <Dashboard /> } />
        </Routes>
    )
}

export default PageRouter