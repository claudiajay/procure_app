import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Dashboard from "../components/Dashboard/Dashboard";
import MakeRequest from "../pages/MakeRequest";
import RequestList from "../pages/RequestList"; // Import the Request List page

const PageRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/new-request" element={<RequestList />} /> 
            {/* <Route path="/new-request" element={<MakeRequest />} />  */}
        </Routes>
    )
}

export default PageRouter
