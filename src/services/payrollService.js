

export const createNewPeriod = (period) => {
    return fetch(`http://localhost:8088/periods`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(period)
    }).then((res) => res.json())
}