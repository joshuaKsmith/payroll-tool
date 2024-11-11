import { EmployeeList } from "./EmployeeList"
import { NewEmployee } from "./NewEmployee"
import "./Employees.css"

export const Employees = () => {

    return (
        <div className="employees">
            <EmployeeList />
            <NewEmployee />
        </div>
    )
}