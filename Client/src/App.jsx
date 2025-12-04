import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Pages
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signin from "./pages/Signin";

// Employee Pages
import Home from "./pages/Home";
import Attendance from "./pages/Attendance";
import EmployeeDashboard from "./pages/EmployeeDashboard";

// Admin Pages
import AdminLayout from "./components/AdminComponents/AdminLayout";
import AdminHome from "./pages/Admin/AdminHome";
import AdminDashboard from "./pages/Admin/Admin_Dashboard";
import AssignTask from "./pages/Admin/AdminTaskAssignment";


import "./App.css";

function App() {
  return (
    <>
      <Routes>

        {/* PUBLIC PAGES */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />

        {/* EMPLOYEE DASHBOARD */}
        <Route path="/home" element={<Home />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/employeedashboard" element={<EmployeeDashboard />} />

        {/* ADMIN DASHBOARD */}
        <Route path="/adminhome" element={<AdminLayout Component={AdminHome} />} />
<Route path="/admindashboard" element={<AdminLayout Component={AdminDashboard} />} />
<Route path="/assign-task" element={<AdminLayout Component={AssignTask} />} />

        
        

      </Routes>
    </>
  );
}

export default App;
