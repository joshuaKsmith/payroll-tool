import { deleteShiftById } from "../../services/shiftService"
import "./Shift.css"

export const Shift = ({ shift, getAndSetShifts }) => {

    const handleShiftDelete = () => {
        deleteShiftById(shift.id).then(() => {
            getAndSetShifts()
        })
    }

    const handleShiftEdit = () => {

    }

    return (
        <li className="shifts-list-item" key={shift.id}>
            <div className="shift-info">
                <div>{shift.employee?.fullName}</div>
                <label className="shift-hours-label">
                    Hours
                    <input 
                        type="text"
                        className="shift-hours-input"
                        
                    />
                </label>
            </div>
            <div className="shift-btn-container">
                <button 
                    className="shift-btn-delete"
                    onClick={handleShiftDelete}
                >
                    DEL
                </button>
                <button 
                    className="shift-btn-save"
                    onClick={handleShiftEdit}
                >
                    SAVE
                </button>
            </div>
        </li>
    )
}