import { useParams } from "react-router-dom"
import "./EmployeeDetails.css"

export const EmployeeDetails = () => {


    const { employeeId } = useParams()

    return (
        <div className="employee-profile">
            <h1>Employee Profile</h1>
            <form className="employee-edit">
                <div className="employee-edit-form">
                    <label>
                        Name:
                        <input 
                        
                        />
                    </label>
                    <label>
                        Phone:
                        <input 
                        
                        />
                    </label>
                    <label>
                        Hire Date:
                        <input 
                            readOnly
                        />
                    </label>
                    <label>
                        Email:
                        <input 
                        
                        />
                    </label>
                    <div className="employee-edit-box">
                        <label className="employee-edit-rate-label">
                            Rate:
                            <input 
                                className="employee-edit-rate-input"
                            />
                        </label>
                        <label>
                            Admin?
                            <input 
                                type="checkbox"
                            />
                        </label>
                    </div>
                </div>
                <div className="profile-btn-container">
                    <button
                        className="profile-btn-save profile-btn"
                    >
                        Update
                    </button>
                    <button
                        className="profile-btn-delete profile-btn"
                    >
                        Terminate
                    </button>
                </div>
            </form>
        </div>
    )
}