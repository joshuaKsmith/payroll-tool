

export const createNewPeriod = (period) => {
    return fetch(`http://localhost:8088/periods`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(period)
    }).then((res) => res.json())
}

export const createNewStub = (stub) => {
    return fetch(`http://localhost:8088/stubs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(stub)
    }).then((res) => res.json())
}