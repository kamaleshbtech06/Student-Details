import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";
import Home from "./pages/Home";
import StudentDetails from "./pages/StudentDetails";
import ApplicationForm from "./pages/ApplicationForm";

function App() {
  return (
    <StudentProvider>
      <Router>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/students">Student Details</Link>
          <Link to="/applicationForm">Application Form</Link>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<StudentDetails />} />
            <Route path="/applicationForm" element={<ApplicationForm />} />
          </Routes>
        </div>
      </Router>
    </StudentProvider>
  );
}

export default App;
