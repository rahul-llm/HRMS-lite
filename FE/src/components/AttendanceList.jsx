import { useState } from "react";
import api from "../api";

function AttendanceForm() {
  const [data, setData] = useState({
    employee_id: "",
    date: "",
    status: "Present",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/attendance", data);
    alert("Attendance marked");
    setData({ employee_id: "", date: "", status: "Present" });
  };

  return (
    <>
      <h2>Mark Attendance</h2>
      <form onSubmit={submit}>
        <input
          name="employee_id"
          placeholder="Employee ID"
          onChange={handleChange}
          value={data.employee_id}
        />
        <input
          type="date"
          name="date"
          onChange={handleChange}
          value={data.date}
        />
        <select name="status" onChange={handleChange} value={data.status}>
          <option>Present</option>
          <option>Absent</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default AttendanceForm;
