import { useEffect, useState } from "react"
import { AdminViews } from "./AdminViews"
import { EmployeeViews } from "./EmployeeViews"


export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const localUser = localStorage.getItem("payroll_user")
        const userObject = JSON.parse(localUser)
        setCurrentUser(userObject) 
    }, [])

    return currentUser.isAdmin ? (
        <AdminViews currentUser={currentUser} />
    ) : (
        <EmployeeViews currentUser={currentUser} />
    )
}