import { useEffect } from "react"
import { useState } from "react"
import { getEmployeeById } from "../../services/employeeService"
import "./Welcome.css"


export const Welcome = ({ currentUser }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        if(currentUser.id) {
            getEmployeeById(currentUser.id).then((employeeObject) => {
                setUser(employeeObject)
            })            
        }
    }, [currentUser])

    return (
        <div className="welcome-page">
            <h1 className="welcome-label welcome-panel">
                Welcome, 
                <span className="welcome-name">
                    {user.fullName}
                </span>
            </h1>
            <div className="welcome-label">
                Today is 
                <span className="welcome-date">
                    {new Date().toISOString().slice(0,10)}
                </span>
            </div>
            <div className="welcome-label">
                Signed-in as 
                <span className="welcome-email">
                    {user.email}
                </span>
            </div>
        </div>
    )
}