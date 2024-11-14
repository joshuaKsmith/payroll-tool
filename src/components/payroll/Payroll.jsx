import { useEffect, useState } from "react"
import "./Payroll.css"
import { createNewPeriod, createNewStub } from "../../services/payrollService"
import { getShiftsInDateRange } from "../../services/shiftService"
import { useNavigate } from "react-router-dom"
import { getAllEmployees } from "../../services/employeeService"
import { PayrollDisplay } from "./PayrollDisplay"

export const Payroll = () => {
    const [startDate, setStartDate] = useState(new Date().toISOString().slice(0,10))
    const [endDate, setEndDate] = useState(new Date().toISOString().slice(0,10))
    const [shifts, setShifts] = useState([])
    const [total, setTotal] = useState("")
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
            <PayrollDisplay shifts={shifts} total={total} />
        </div>
    )
}