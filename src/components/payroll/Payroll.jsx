import { useEffect, useState } from "react"
import "./Payroll.css"
import { createNewPeriod, createNewStub } from "../../services/payrollService"
import { getShiftsInDateRange } from "../../services/shiftService"
import { useNavigate } from "react-router-dom"
import { getAllEmployees } from "../../services/employeeService"

export const Payroll = () => {
    const [startDate, setStartDate] = useState(new Date().toISOString().slice(0,10))
    const [endDate, setEndDate] = useState(new Date().toISOString().slice(0,10))
    const [shifts, setShifts] = useState([])
    const [total, setTotal] = useState("0")
    const [employees, setEmployees] = useState([])
    const navigate = useNavigate()
    
    const getAndSetShifts = () => {
        getShiftsInDateRange(startDate, endDate).then((shiftArray) => {
            setShifts(shiftArray)
        })
    }

    const getAndSetTotal = () => {
        let newTotal = 0
        shifts.forEach((shift) => {
            const thisTotal = shift.length * shift.employee?.rate
            newTotal += thisTotal
            setTotal(newTotal)
        })
    }

    const getAndSetEmployees = () => {
        getAllEmployees().then((employeeArray) => {
            setEmployees(employeeArray)
        })
    }

    const handleCreateStubs = (periodId) => {
        const filteredEmployees = employees.filter((employee) => 
            shifts.some((shift) => 
                employee.id == shift.employeeId
            )
        )
        filteredEmployees.forEach((employee) => {
            const newStub = { employeeId: employee.id, periodId: periodId }
            createNewStub(newStub)
        })
    }

    const handleCreatePeriod = () => {
        const newPeriod = { dateStart: startDate, dateEnd: endDate }
        createNewPeriod(newPeriod).then((thisPeriod) => {
            handleCreateStubs(thisPeriod.id)
            navigate("/periods")
        })
    }

    useEffect(() => {
        getAndSetShifts()
    }, [startDate, endDate])

    useEffect(() => {
        getAndSetTotal()
    }, [shifts])

    useEffect(() => {
        getAndSetEmployees()
    }, [total])

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
                            <div className="payroll-shift-name">{shift.employee?.fullName}</div>
                            <div>{shift.length}</div>
                            <div>{shift.employee?.rate}</div>
                            <div>{shift.length * shift.employee?.rate}</div>
                        </div>
                    )}
                </div>
                <label className="payroll-total-label">
                    Total Wages:
                    <div className="payroll-total-data">
                        {total}
                    </div>
                </label>
            </div>
        </div>
    )
}