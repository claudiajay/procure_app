import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import MakeRequest from "../pages/MakeRequest"; 
import RequestList from "../pages/RequestList"; 
import RequestDetails from "../pages/RequestDetails";
import PrivateRoute from "../components/PrivateRoute";
import Dashboard from "../components/Dashboard/Dashboard";

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
     
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/new-request"
        element={
          <PrivateRoute>
            <RequestList /> 
          </PrivateRoute>
        }
      />

      <Route
        path="/my-requests"
        element={
          <PrivateRoute>
            <MakeRequest /> 
          </PrivateRoute>
        }
      />

      <Route
        path="/requests/:id"
        element={
          <PrivateRoute>
            <RequestDetails />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default PageRouter;
