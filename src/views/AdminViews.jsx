import { Outlet, Route, Routes } from "react-router-dom"
import { AdminNavBar } from "../components/navbars/AdminNavBar"
import { Welcome } from "../components/welcome/Welcome"
import { Shifts } from "../components/shifts/Shifts"
import { Payroll } from "../components/shifts/Payroll"
import { Employees } from "../components/employees/Employees"
import { EmployeeDetails } from "../components/employees/EmployeeDetails"
import { Periods } from "../components/periods/Periods"

export const AdminViews = ({ currentUser }) => {


    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <AdminNavBar />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<Welcome currentUser={currentUser} />} />
                <Route path="shifts">
                    <Route index element={<Shifts currentUser={currentUser}/>} />
                    <Route
                        path="payroll"
                        element={<Payroll />}
                    />
                </Route>
                <Route path="employees">
                    <Route index element={<Employees />} />
                    <Route
                        path=":employeeId"
                        element={<EmployeeDetails />} 
                    />
                </Route>
                <Route
                    path="periods"
                    element={<Periods />}
                />
            </Route>
        </Routes>
    )
}