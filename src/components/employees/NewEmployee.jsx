import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createNewEmployee } from "../../services/employeeService"


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
    
    const handleCreate = (event) => {
        event.preventDefault()
        createNewEmployee(employee).then((newObject) => {
            navigate(`/employees/${newObject.id}`)
        })
    }

    return (
        <div className="employees-new">
            <h2>New Employee</h2>
            <form onSubmit={handleCreate} className="employees-new-form">
                <label>
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
                <label>
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
                <label>
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
                <div>
                    <label>
                        Rate :
                        <input 
                            type="text"
                            name="rate"
                            value={employee.rate}
                            onChange={handleChange}
                            required
                            className="employees-new-rate"
                        />
                    </label>
                    <label>
                        Admin?
                        <input
                            type="checkbox"
                            name="isAdmin"
                            checked={employee.isAdmin}
                            onChange={handleChange}
                            className="employees-new-checkbox"
                        />
                    </label>
                </div>
                <div>
                    <button className="employees-new-create" type="submit">
                        Create
                    </button>
                </div>
            </form>
        </div>
    )
}