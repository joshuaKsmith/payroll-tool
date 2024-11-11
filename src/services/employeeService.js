export const getEmployeeByEmail = (email) => {
    return fetch(`http://localhost:8088/employees?email=${email}`).then((res) => res.json())
}

export const getAllEmployees = () => {
    return fetch(`http://localhost:8088/employees`).then((res) => res.json())
}