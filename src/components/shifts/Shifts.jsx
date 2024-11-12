import { useState } from "react"
import "./Shifts.css"

export const Shifts = ({ currentUser }) => {
    const [date, setDate] = useState(new Date().toISOString().slice(0,10))

    const handleDateChange = (event) => {
        setDate(event.target.value)
    }

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
                    New Entry
                </div>
            </div>
            <div className="shifts-right-panel">
                Shifts
            </div>
        </div>
    )
}