
const API_URL = "https://payroll-api-4oxy5.ondigitalocean.app"


export const createNewPeriod = (period) => {
    return fetch(`${API_URL}/periods`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(period)
    }).then((res) => res.json())
}

export const getAllPeriods = () => {
    return fetch(`${API_URL}/periods`).then((res) => res.json())
}

export const createNewStub = (stub) => {
    return fetch(`${API_URL}/stubs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(stub)
    }).then((res) => res.json())
}