import { useEffect, useState } from "react"
import "./Shifts.css"
import { getAllEmployees } from "../../services/employeeService"

export const Shifts = ({ currentUser }) => {
    const [date, setDate] = useState(new Date().toISOString().slice(0,10))
    const [employees, setEmployees] = useState([])
    const [newShift, setNewShift] = useState({
        date: new Date().toISOString().slice(0,10),
        employeeId: 1,
        length: 0
    })

    const handleDateChange = (event) => {
        setDate(event.target.value)
    }

    const handleEmployeeSelect = (event) => {
        setNewShift((prev) => {
            prev.employeeId = event.target.value
            return prev
        })
    }

    useEffect(() => {
        getAllEmployees().then((employeeArray) => {
            setEmployees(employeeArray)
        })
    }, [])

    return (
        <div className="shifts-view">
            <div className="shifts-left-panel">
                <input 
                    className="shifts-date"
                    type="date"
                    value={date}
                    onChange={handleDateChange}
                />
                <div className="shifts-new-entry">
                    <h2>New Entry</h2>
                    <select className="shifts-employee-select" id="shifts-select" onChange={handleEmployeeSelect}>
                        {employees.map((employee) => 
                            <option
                                id={employee.id}
                                key={employee.id}
                                value={employee.id}
                            >
                                {employee.fullName}
                            </option>
                        )}
                    </select>
                    <label className="shifts-hours-label">
                        Hours Worked
                        <input 
                            type="number"
                            min="0"
                            max="24"
                            placeholder="0.0"
                            step="0.1"
                            className="shifts-hours-input"
                            id="shifts-hours-input"
                        />
                    </label>
                    <button
                        className="shifts-new-btn"
                        onClick={() => {}}
                    >
                        Submit
                    </button>
                </div>
            </div>
            <div className="shifts-right-panel">
                Shifts
            </div>
        </div>
    )
}