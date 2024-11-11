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
        <div className="employees-list-panel">
            Employee List Panel
        </div>
    )
}