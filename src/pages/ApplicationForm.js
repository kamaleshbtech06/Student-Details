import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";

function ApplicationForm() {
  const { addStudent, updateStudent } = useContext(StudentContext);
  const navigate = useNavigate();
  const location = useLocation();

  const editingStudent = location.state?.student || null;

  const [formData, setFormData] = useState(
    editingStudent || { id: "", name: "", department: "" }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.id || !formData.name || !formData.department) {
      alert("Please fill all fields");
      return;
    }
    if (editingStudent) {
      updateStudent(editingStudent.id, formData);
    } else {
      addStudent(formData);
    }
    setFormData({ id: "", name: "", department: "" });
    navigate("/students");
  };

  return (
    <div>
      <h1>{editingStudent ? "Edit Student" : "Application Form"}</h1>
      <form onSubmit={handleSubmit} className="application-form">
        <div className="form-row">
          <label>Id:</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />
        </div>
        <button type="submit">{editingStudent ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
}

export default ApplicationForm;
