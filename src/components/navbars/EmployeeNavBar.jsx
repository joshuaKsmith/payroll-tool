import { useNavigate, Link } from "react-router-dom"
import "./NavBar.css"

export const EmployeeNavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar-item">
                <Link to="/shifts">Shifts</Link>
            </li>
            <li className="navbar-item">
                <Link to="/stubs">Paystubs</Link>
            </li>
            <li className="navbar-item">
                <Link to="/profile">Profile</Link>
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