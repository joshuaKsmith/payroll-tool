import { useEffect, useState } from "react"
import "./Shifts.css"
import { getAllEmployees } from "../../services/employeeService"
import { getShiftsByDate, postNewShift } from "../../services/shiftService"
import { Shift } from "./Shift"

export const Shifts = ({ currentUser }) => {
    const [date, setDate] = useState(new Date().toISOString().slice(0,10))
    const [employees, setEmployees] = useState([])
    const [newShift, setNewShift] = useState({
        date: new Date().toISOString().slice(0,10),
        employeeId: 1,
        length: "0"
    })
    const [shifts, setShifts] = useState([])

    const getAndSetShifts = () => {
        getShiftsByDate(date).then((shiftsArray) => {
            setShifts(shiftsArray)
        })
    }

    const handleDateChange = (event) => {
        setDate(event.target.value)
    }

    const handleEmployeeSelect = (event) => {
        setNewShift((prev) => {
            prev.employeeId = event.target.value
            return prev
        })
    }

    const handleHoursChange = (event) => {
        setNewShift((prev) => {
            prev.length = event.target.value
            return prev
        })
    }

    const handleShiftSubmission = () => {
        postNewShift(newShift).then(() => {
            getAndSetShifts()
        })
    }

    useEffect(() => {
        getAllEmployees().then((employeeArray) => {
            setEmployees(employeeArray)
        })
    }, [])

    useEffect(() => {
        getAndSetShifts()
    }, [date, employees])

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
                            type="text"
                            className="shifts-hours-input"
                            id="shifts-hours-input"
                            onChange={handleHoursChange}
                            required
                        />
                    </label>
                    <button
                        className="shifts-new-btn"
                        onClick={handleShiftSubmission}
                    >
                        Submit
                    </button>
                </div>
            </div>
            <div className="shifts-right-panel">
                <h2>Shifts</h2>
                <ul className="shifts-list">
                    {shifts.map((shift) => 
                        <Shift 
                            shift={shift}
                            key={shift.id}
                            getAndSetShifts={getAndSetShifts}
                        />
                    )}
                </ul>
            </div>
        </div>
    )
}