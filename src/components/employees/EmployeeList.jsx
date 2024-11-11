import { useEffect } from "react"
import { useState } from "react"
import { getAllEmployees } from "../../services/employeeService"


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
            <ul>
                {employees.map((employee) =>
                    <li className="employee-item">
                        {employee.fullName}
                    </li>
                )}

            </ul>
        </div>
    )
}