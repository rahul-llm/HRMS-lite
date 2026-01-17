import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import AttendanceForm from "./components/AttendanceForm";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>HRMS Lite</h1>

      <EmployeeForm />
      <EmployeeList />
      <AttendanceForm />
    </div>
  );
}

export default App;
