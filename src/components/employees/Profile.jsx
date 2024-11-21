import { useEffect, useState } from "react"
import { getEmployeeById, updateEmployeeRecord } from "../../services/employeeService"
import "./Profile.css"
import { useNavigate } from "react-router-dom"

export const Profile = ({ currentUser }) => {
    const navigate = useNavigate()
    const [employee, setEmployee] = useState({
        fullName: "",
        phone: "",
        hireDate: "",
        rate: "",
        email: "",
        isAdmin: false
    })

    const getAndSetEmployee = () => {
        getEmployeeById(currentUser.id).then((employeeObject) => {
            setEmployee(employeeObject)
        })
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setEmployee((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleUpdateEmployee = () => {
        updateEmployeeRecord(employee).then(() => {
            window.alert("Profile Updated!")
            navigate("..")
        })
    }

    useEffect(() => {
        getAndSetEmployee()
    }, [])

    return (
        <div className="employee-profile">
            <h1>Employee Profile</h1>
            <div className="employee-edit">
                <div className="employee-edit-form">
                    <label>
                        Name:
                        <input
                            className="employee-edit-hire-input"
                            type="text"
                            name="fullName"
                            readOnly
                            value={employee.fullName}
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
                                className="employee-edit-rate-input employee-edit-hire-input"
                                type="text"
                                name="rate"
                                readOnly
                                value={employee.rate}
                            />
                        </label>
                    </div>
                </div>
                <div className="profile-btn-container">
                    <button
                        className="profile-btn-save profile-btn"
                        onClick={handleUpdateEmployee}
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    )
}