import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const AdminNavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar-item">
                <Link to="/employees">Employees</Link>
            </li>
            <li className="navbar-item">
                <Link to="/shifts">Shifts</Link>
            </li>
            <li className="navbar-item">
                <Link to="/shifts/payroll">Payroll</Link>
            </li>
            <li className="navbar-item">
                <Link to="/periods">Periods</Link>
            </li>
            <li className="navbar-item">
                <Link
                    to=""
                    onClick={() => {
                        localStorage.removeItem("payroll_user")
                        navigate("/", { replace: true })
                    }}
                >
                    Logout
                </Link>
            </li>
        </ul>
    )
}