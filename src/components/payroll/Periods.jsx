import { useEffect, useState } from "react"
import { PayrollDisplay } from "./PayrollDisplay"
import "./Periods.css"
import { getAllPeriods } from "../../services/payrollService"
import { getShiftsInDateRange } from "../../services/shiftService"

export const Periods = () => {
    const [periods, setPeriods] = useState([])
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [shifts, setShifts] = useState([])
    const [total, setTotal] = useState("")

    const getAndSetPeriods = () => {
        getAllPeriods().then((periodArray) => {
            setPeriods(periodArray)
        })
    }

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

    const handlePeriodSelect = (event) => {
        setStartDate(event.target.value.slice(0,10))
        setEndDate(event.target.value.slice(16,26))
    }

    useEffect(() => {
        getAndSetPeriods()
    }, [])

    useEffect(() => {
        getAndSetShifts()
    }, [startDate, endDate])

    useEffect(() => {
        getAndSetTotal()
    }, [shifts])

    return (
        <div>
            <div>
                <select onChange={handlePeriodSelect}>
                    <option key={0} value="">Select a Period</option>
                    {periods.map((period) => 
                        <option key={period.id}>
                            {period.dateStart} thru {period.dateEnd}
                        </option>
                    )}
                </select>
            </div>
            <PayrollDisplay shifts={shifts} total={total} />
        </div>
    )
}