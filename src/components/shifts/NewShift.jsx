

export const NewShift = ({
    handleEmployeeSelect,
    employees,
    handleHoursChange,
    handleShiftSubmission,
    hoursInputRef,
    currentUser 
}) => {

    return (
        <form className="shifts-new-entry" onSubmit={handleShiftSubmission}> 
            <h2>New Entry</h2>
            {currentUser.isAdmin && (
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
            )}
            <label className="shifts-hours-label">
                Hours Worked
                <input 
                    type="text"
                    className="shifts-hours-input"
                    id="shifts-hours-input"
                    ref={hoursInputRef}
                    onChange={handleHoursChange}
                    required
                />
            </label>
            <button className="shifts-new-btn" type="submit">
                Submit
            </button>
        </form>
    )
}