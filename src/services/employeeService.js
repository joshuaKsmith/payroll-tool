
export const getEmployeeByEmail = (email) => {
    return fetch(`http://localhost:8088/employees?email=${email}`).then((res) => res.json())
}

export const getEmployeeById = (id) => {
    return fetch(`http://localhost:8088/employees/${id}`).then((res) => res.json())
}

export const getAllEmployees = () => {
    return fetch(`http://localhost:8088/employees`).then((res) => res.json())
}

export const createNewEmployee = (employee) => {
    return fetch(`http://localhost:8088/employees`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    }).then((res) => res.json())
}

export const terminateEmployee = (employeeId) => {
    return fetch(`http://localhost:8088/employees/${employeeId}`, {
        method: "DELETE"
    }).then((res) => res.json())
}

export const updateEmployeeRecord = (editedEmployee) => {
    return fetch(`http://localhost:8088/employees/${editedEmployee.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedEmployee)
    }).then((res) => res.json())
}