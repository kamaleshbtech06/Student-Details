import React, { createContext, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const updateStudent = (originalId, updated) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === originalId ? updated : s))
    );
  };

  return (
    <StudentContext.Provider
      value={{ students, addStudent, deleteStudent, updateStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
};
