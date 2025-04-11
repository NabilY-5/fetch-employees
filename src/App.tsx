import { useState } from "react";
import EmployeeCard from "./components/EmployeeCard";
import "./App.css";

const sampleEmployee = {
	name: {
		first: "Charlie",
		last: "Thompson",
	},
	email: "charlie.thompson@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
	},
};

function App() {
	const [employee, setEmployee] = useState(sampleEmployee);

	const getEmployee = () => {
		fetch("http://localhost:8080/api/employees")
			.then((response) => response.json())
			.then((data) => {
				setEmployee(data.results[0]);
			});
	};

	return (
		<div>
			<button type="button" onClick={getEmployee}>
				Get employee
			</button>
			<EmployeeCard employee={employee} />
		</div>
	);
}

export default App;
