
const API_URL = "https://payroll-api-4oxy5.ondigitalocean.app"


export const getEmployeeByEmail = (email) => {
    return fetch(`${API_URL}/employees?email=${email}`).then((res) => res.json())
}

export const getEmployeeById = (id) => {
    return fetch(`${API_URL}/employees/${id}`).then((res) => res.json())
}

export const getAllEmployees = () => {
    return fetch(`${API_URL}/employees`).then((res) => res.json())
}

export const createNewEmployee = (employee) => {
    return fetch(`${API_URL}/employees`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    }).then((res) => res.json())
}

export const terminateEmployee = (employeeId) => {
    return fetch(`${API_URL}/employees/${employeeId}`, {
        method: "DELETE"
    }).then((res) => res.json())
}

export const updateEmployeeRecord = (editedEmployee) => {
    return fetch(`${API_URL}/employees/${editedEmployee.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedEmployee)
    }).then((res) => res.json())
}