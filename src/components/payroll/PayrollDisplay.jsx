import "./PayrollDisplay.css"

export const PayrollDisplay = ({ shifts, total, currentUser }) => {


    return (
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
                {currentUser.isAdmin ? "Total Wages:" : "Total Earnings:"}
                <div className="payroll-total-data">
                    {total}
                </div>
            </label>
        </div>
    )
}