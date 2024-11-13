import { useState } from "react"
import { deleteShiftById, updateEditedShift } from "../../services/shiftService"
import "./Shift.css"

export const Shift = ({ shift, getAndSetShifts }) => {

    const [newHours, setNewHours] = useState(shift.length)

    const handleShiftDelete = () => {
        deleteShiftById(shift.id).then(() => {
            getAndSetShifts()
        })
    }

    const handleHoursChange = (event) => {
        setNewHours(event.target.value)
    }

    const handleShiftEdit = () => {
        const updatedShift = {
            id: shift.id,
            date: shift.date,
            employeeId: shift.employeeId,
            length: newHours
        }
        updateEditedShift(updatedShift).then(() => {
            getAndSetShifts()
        })
    }

    return (
        <li className="shifts-list-item" key={shift.id}>
            <div className="shift-info">
                <div className="shift-item-name">{shift.employee?.fullName}</div>
                <label className="shift-hours-label">
                    Hours
                    <input 
                        type="text"
                        className="shift-hours-input"
                        value={newHours}
                        onChange={handleHoursChange}
                    />
                </label>
            </div>
            <div className="shift-btn-container">
                <button 
                    className="shift-btn-delete shift-btn"
                    onClick={handleShiftDelete}
                >
                    DEL
                </button>
                <button 
                    className="shift-btn-save shift-btn"
                    onClick={handleShiftEdit}
                >
                    SAVE
                </button>
            </div>
        </li>
    )
}