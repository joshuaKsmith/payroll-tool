import { useParams } from "react-router-dom"
import "./EmployeeDetails.css"
import { useEffect, useState } from "react"
import { getEmployeeById } from "../../services/employeeService"

export const EmployeeDetails = ({ currentUser }) => {
    const [employee, setEmployee] = useState({
        fullName: "",
        phone: "",
        hireDate: "",
        rate: "",
        email: ""
    })
    const { employeeId } = useParams()

    const getAndSetEmployee = () => {
        getEmployeeById(employeeId).then((employeeObject) => {
            setEmployee(employeeObject)
        })
    }

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        setEmployee((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    useEffect(() => {
        getAndSetEmployee()
    }, [])

    return (
        <div className="employee-profile">
            <h1>Employee Profile</h1>
            <form className="employee-edit">
                <div className="employee-edit-form">
                    <label>
                        Name:
                        <input
                            className="employee-edit-field"
                            type="text"
                            name="fullName"
                            value={employee.fullName}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Phone:
                        <input 
                            className="employee-edit-field"
                            type="text"
                            name="phone"
                            value={employee.phone}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Hire Date:
                        <input
                            className="employee-edit-hire-input"
                            type="text"
                            name="hireDate"
                            readOnly
                            value={employee.hireDate}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            className="employee-edit-field"
                            type="text"
                            name="email"
                            value={employee.email}
                            onChange={handleChange}
                        />
                    </label>
                    <div className="employee-edit-box">
                        <label className="employee-edit-rate-label">
                            Rate:
                            <input 
                                className="employee-edit-rate-input employee-edit-field"
                                type="text"
                                name="rate"
                                value={employee.rate}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Admin?
                            <input 
                                type="checkbox"
                                checked={employee.isAdmin}
                            />
                        </label>
                    </div>
                </div>
                <div className="profile-btn-container">
                    <button
                        className="profile-btn-save profile-btn"
                    >
                        Update
                    </button>
                    <button
                        className="profile-btn-delete profile-btn"
                    >
                        Terminate
                    </button>
                </div>
            </form>
        </div>
    )
}