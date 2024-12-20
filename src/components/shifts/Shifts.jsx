import { useEffect, useRef, useState } from "react"
import "./Shifts.css"
import { getAllEmployees } from "../../services/employeeService"
import { getShiftsInDateRange, postNewShift } from "../../services/shiftService"
import { Shift } from "./Shift"
import { NewShift } from "./NewShift"

export const Shifts = ({ currentUser }) => {
    const [date, setDate] = useState(new Date().toISOString().slice(0,10))
    const [employees, setEmployees] = useState([])
    const [newShift, setNewShift] = useState({
        date: new Date().toISOString().slice(0,10),
        employeeId: (currentUser.isAdmin ? "1" : currentUser.id),
        length: "0"
    })
    const [shifts, setShifts] = useState([])
    const hoursInputRef = useRef(null)

    const getAndSetShifts = () => {
        getShiftsInDateRange(date, date).then((shiftsArray) => {
            setShifts(shiftsArray)
        })
    }

    const resetForm = () => {
        setNewShift((prev) => {
            prev.length = "0"
            return prev
        })
        hoursInputRef.current.value = "0"
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

    const handleShiftSubmission = (event) => {
        event.preventDefault()
        postNewShift(newShift).then(() => {
            getAndSetShifts()
            resetForm()
        })
    }

    useEffect(() => {
        getAllEmployees().then((employeeArray) => {
            setEmployees(employeeArray)
        })
    }, [])

    useEffect(() => {
        getAndSetShifts()
        setNewShift((prev) => {
            prev.date = date
            return prev
        })
    }, [date, employees])

    return (
        <div className="shifts-view">
            <div className="shifts-left-panel">
                <input 
                    className="shifts-date"
                    type="date"
                    value={newShift.date}
                    onChange={handleDateChange}
                />
                <NewShift 
                    handleEmployeeSelect={handleEmployeeSelect}
                    employees={employees}
                    handleHoursChange={handleHoursChange}
                    handleShiftSubmission={handleShiftSubmission}
                    hoursInputRef={hoursInputRef}
                    currentUser={currentUser}
                />
            </div>
            <div className="shifts-right-panel">
                <h2>Shifts</h2>
                <ul className="shifts-list">
                    {shifts.map((shift) => 
                        <Shift 
                            shift={shift}
                            key={shift.id}
                            getAndSetShifts={getAndSetShifts}
                            currentUser={currentUser}
                        />
                    )}
                </ul>
            </div>
        </div>
    )
}