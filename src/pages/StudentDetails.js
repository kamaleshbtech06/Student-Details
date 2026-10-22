import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";

function StudentDetails() {
  const { students, deleteStudent } = useContext(StudentContext);
  const navigate = useNavigate();

  const handleEdit = (student) => {
    navigate("/applicationForm", { state: { student } });
  };

  return (
    <div>
      <h1>Student Detais</h1>
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DEPT</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="4">No students added yet.</td>
            </tr>
          ) : (
            students.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.department}</td>
                <td>
                  <button onClick={() => handleEdit(s)}>Edit</button>{" "}
                  <button onClick={() => deleteStudent(s.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentDetails;
