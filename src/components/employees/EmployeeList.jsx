import { useEffect } from "react"
import { useState } from "react"
import { getAllEmployees } from "../../services/employeeService"
import { Link } from "react-router-dom"


export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    const getAndSetEmployees = () => {
        getAllEmployees().then((employeeArray) => {
            setEmployees(employeeArray)
        })
    }

    useEffect(() => {
        getAndSetEmployees()
    }, [])

    return (
        <div className="employees-list">
            <h2>Employees</h2>
            <ul className="employee-items">
                {employees.map((employee) =>
                    <Link to={`employees/${employee.id}`} key={employee.id} >
                        <li className="employee-item" key={employee.id}>
                            {employee.fullName}
                        </li>
                    </Link>
                )}

            </ul>
        </div>
    )
}