import React, { useState } from 'react';
import './AttendanceForm.css';

const AttendanceForm = () => {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({
    name: '',
    number: '',
    city: '',
    rollNo: '',
    attendance: ''  // Added attendance state
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, student]);
    setStudent({
      name: '',
      number: '',
      city: '',
      rollNo: '',
      attendance: ''  // Reset attendance state
    });
  };

  const handleAttendance = (index, status) => {
    const updatedStudents = students.map((s, i) => 
      i === index ? { ...s, attendance: status } : s
    );
    setStudents(updatedStudents);
  };

  return (
    <div className="studentData">
      <form id="form1" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={student.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Number"
          name="number"
          value={student.number}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={student.city}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Roll No"
          name="rollNo"
          value={student.rollNo}
          onChange={handleChange}
          required
        />
        <input
          type="submit"
          className="btn submit-button"
          value="Submit"
          style={{ backgroundColor: 'orange', float: 'left' }} // Submit button styling
        />
      </form>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Number</th>
            <th>City</th>
            <th>Roll No.</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.number}</td>
              <td>{student.city}</td>
              <td>{student.rollNo}</td>
              <td>
                <button
                  className={`btn ${student.attendance === 'Present' ? 'btn-success' : ''}`}
                  onClick={() => handleAttendance(index, 'Present')}
                >
                  Present
                </button>
                <button
                  className={`btn ${student.attendance === 'Absent' ? 'btn-danger' : ''}`}
                  onClick={() => handleAttendance(index, 'Absent')}
                >
                  Absent
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceForm;

