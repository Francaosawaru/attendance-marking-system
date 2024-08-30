import React, { useState } from 'react';
import './AttendanceForm.css';

function AttendanceForm() {
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [attendance, setAttendance] = useState('Present'); // Default to "Present"

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = {
      name: studentName,
      number,
      city,
      rollNo,
      attendance,
    };
    setStudents([...students, newStudent]);

    // Reset form fields
    setStudentName('');
    setNumber('');
    setCity('');
    setRollNo('');
    setAttendance('Present');
  };

  return (
    <div className="studentData">
      <form id="form1" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          id="studentName"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Number"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="City"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Roll No"
          id="rollNo"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          required
        />
        <div className="attendance-options">
          <label>
            <input
              type="radio"
              name="attendance"
              value="Present"
              checked={attendance === 'Present'}
              onChange={() => setAttendance('Present')}
            />
            Present
          </label>
          <label>
            <input
              type="radio"
              name="attendance"
              value="Absent"
              checked={attendance === 'Absent'}
              onChange={() => setAttendance('Absent')}
            />
            Absent
          </label>
        </div>
        <button type="submit" className="submit-button">Submit</button>
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
        <tbody id="tbody">
          {students.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.number}</td>
              <td>{student.city}</td>
              <td>{student.rollNo}</td>
              <td className={student.attendance === 'Present' ? 'text-success' : 'text-danger'}>
                {student.attendance}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceForm;
