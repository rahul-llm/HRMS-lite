import { useEffect, useState } from "react";
import api from "../api";
import AttendanceList from "./AttendanceList";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    api.get("/employees").then((res) => setEmployees(res.data));
  }, []);

  return (
    <>
      <h2>Employees</h2>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} ({emp.department})
            <AttendanceList employeeId={emp.id} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default EmployeeList;
