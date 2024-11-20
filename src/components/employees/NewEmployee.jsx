import { useState } from "react"
import { createNewEmployee } from "../../services/employeeService"
import { useNavigate } from "react-router-dom"


export const NewEmployee = () => {
    const navigate = useNavigate()
    const [employee, setEmployee] = useState({
        isAdmin: false,
        hireDate: new Date().toISOString().slice(0,10),
        fullName: "",
        rate: 0,
        email: "",
        phone: ""
    })

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        setEmployee((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }
    
    const handleCreate = () => {
        createNewEmployee(employee).then((res) => {
            navigate(`${res.id}`)
        })
    }

    return (
        <div className="employees-new">
            <h2>New Employee</h2>
            <div className="employees-new-form">
                <label className="employees-new-label">
                    Name :
                    <input
                        type="text"
                        name="fullName"
                        value={employee.fullName}
                        onChange={handleChange}
                        required
                        className="employees-new-input"
                    />
                </label>
                <label className="employees-new-label">
                    Phone :
                    <input
                        type="text"
                        name="phone"
                        value={employee.phone}
                        onChange={handleChange}
                        required
                        className="employees-new-input"
                    />
                </label>
                <label className="employees-new-label">
                    Email :
                    <input
                        type="text"
                        name="email"
                        value={employee.email}
                        onChange={handleChange}
                        required
                        className="employees-new-input"
                    />
                </label>
                <label className="employees-new-label">
                    Rate :
                    <input 
                        type="text"
                        name="rate"
                        value={employee.rate}
                        onChange={handleChange}
                        required
                        className="employees-new-input"
                    />
                </label>
                <label className="employees-new-label">
                    Admin?
                    <input
                        type="checkbox"
                        name="isAdmin"
                        checked={employee.isAdmin}
                        onChange={handleChange}
                        className="employees-new-input"
                    />
                </label>
                <button 
                    className="employees-new-create"
                    onClick={handleCreate}
                >

                    Create
                </button>
            </div>
        </div>
    )
}