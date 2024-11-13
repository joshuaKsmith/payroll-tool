import { useState } from "react"
import { createNewEmployee } from "../../services/employeeService"


export const NewEmployee = () => {
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
    
    const handleCreate = (event) => {
        createNewEmployee(employee).then((newObject) => {
        })
    }

    return (
        <div className="employees-new">
            <h2>New Employee</h2>
            <form onSubmit={handleCreate} className="employees-new-form">
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
                <button className="employees-new-create" type="submit">
                    Create
                </button>
            </form>
        </div>
    )
}