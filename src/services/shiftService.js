

export const postNewShift = (shift) => {
    return fetch(`http://localhost:8088/shifts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(shift)
    }).then((res) => res.json())
}