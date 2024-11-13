import { useEffect, useState } from "react"
import "./Payroll.css"
import { createNewPeriod } from "../../services/payrollService"
import { getShiftsInDateRange } from "../../services/shiftService"

export const Payroll = () => {
    const [startDate, setStartDate] = useState(new Date().toISOString().slice(0,10))
    const [endDate, setEndDate] = useState(new Date().toISOString().slice(0,10))
    const [shifts, setShifts] = useState([])
    
    const getAndSetShifts = () => {
        getShiftsInDateRange(startDate, endDate).then((shiftArray) => {
            setShifts(shiftArray)
        })
    }

    const handleCreatePeriod = () => {
        const newPeriod = { dateStart: startDate, dateEnd: endDate }
        createNewPeriod(newPeriod).then(() => {
            getAndSetShifts()
        })
    }

    useEffect(() => {
        getAndSetShifts()
    }, [startDate, endDate])

    return (
        <div className="payroll-view">
            <div className="payroll-create">
                <label className="payroll-create-label">
                    Start Date
                    <input 
                        type="date"
                        className="payroll-date-select payroll-start"
                        value={startDate}
                        onChange={(e) => {setStartDate(e.target.value)}}
                    />
                </label>
                <label className="payroll-create-label">
                    End Date
                    <input 
                        type="date"
                        className="payroll-date-select payroll-end"
                        value={endDate}
                        onChange={(e) => {setEndDate(e.target.value)}}
                    />
                </label>
                <div className="payroll-create-form">
                    <div>Carefully Verify</div>
                    <div>everything is correct!</div>
                    <button
                        className="payroll-create-btn"
                        onClick={handleCreatePeriod}
                    >
                        Submit
                    </button>
                </div>
            </div>
            <div className="payroll-display">
                <div className="payroll-info">
                    <div className="payroll-info-header">
                        <h2>Name</h2>
                        <h2>Hours</h2>
                        <h2>Rate</h2>
                        <h2>Total</h2>
                    </div>
                    {shifts.map((shift) => 
                        <div className="payroll-shift-item" key={shift.id}>
                            <div>{shift.employee?.fullName}</div>
                            <div>{shift.length}</div>
                            <div>{shift.employee?.rate}</div>
                            <div>{shift.length * shift.employee?.rate}</div>
                        </div>
                    )}
                </div>
                <label className="payroll-total-label">
                    Total Wages:
                    <div className="payroll-total-data">
                        {}
                    </div>
                </label>
            </div>
        </div>
    )
}