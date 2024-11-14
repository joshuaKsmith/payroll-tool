
export const postNewShift = (shift) => {
    return fetch(`http://localhost:8088/shifts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(shift)
    }).then((res) => res.json())
}

export const getShiftsInDateRange = (dateStart, dateEnd) => {
    return fetch(
        `http://localhost:8088/shifts?date_gte=${dateStart}&date_lte=${dateEnd}&_expand=employee`
    ).then((res) => res.json())
}

export const getShiftsInDateRangeByUser = (id, dateStart, dateEnd) => {
    return fetch (
        `http://localhost:8088/shifts?employeeId=${id}&date_gte=${dateStart}&date_lte=${dateEnd}&_expand=employee`
    ).then((res) => res.json())
}

export const deleteShiftById = (id) => {
    return fetch(`http://localhost:8088/shifts/${id}`, {
        method: "DELETE"
    }).then((res) => res.json())
}

export const updateEditedShift = (shift) => {
    return fetch(`http://localhost:8088/shifts/${shift.id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(shift)
    }).then((res) => res.json())
}