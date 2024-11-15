
const API_URL = "https://payroll-api-4oxy5.ondigitalocean.app"


export const postNewShift = (shift) => {
    return fetch(`${API_URL}/shifts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(shift)
    }).then((res) => res.json())
}

export const getShiftsInDateRange = (dateStart, dateEnd) => {
    return fetch(
        `${API_URL}/shifts?date_gte=${dateStart}&date_lte=${dateEnd}&_expand=employee`
    ).then((res) => res.json())
}

export const getShiftsInDateRangeByUser = (id, dateStart, dateEnd) => {
    return fetch (
        `${API_URL}/shifts?employeeId=${id}&date_gte=${dateStart}&date_lte=${dateEnd}&_expand=employee`
    ).then((res) => res.json())
}

export const deleteShiftById = (id) => {
    return fetch(`${API_URL}/shifts/${id}`, {
        method: "DELETE"
    }).then((res) => res.json())
}

export const updateEditedShift = (shift) => {
    return fetch(`${API_URL}/shifts/${shift.id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(shift)
    }).then((res) => res.json())
}