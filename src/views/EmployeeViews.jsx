import { Outlet, Route, Routes } from "react-router-dom"
import { EmployeeNavBar } from "../components/navbars/EmployeeNavBar"
import { Shifts } from "../components/shifts/Shifts"
import { Welcome } from "../components/welcome/Welcome"
import { Paystubs } from "../components/stubs/Paystubs"
import { Profile } from "../components/employees/Profile"



export const EmployeeViews = ({ currentUser }) => {

    return (
        <Routes>
            <Route 
                path="/"
                element={
                    <>
                        <EmployeeNavBar />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<Welcome currentUser={currentUser} />} />
                <Route
                    path="shifts"
                    element={<Shifts currentUser={currentUser} />}
                />
                <Route 
                    path="profile"
                    element={<Profile currentUser={currentUser} />}
                />
                <Route
                    path="stubs"
                    element={<Paystubs />}
                />
            </Route>
        </Routes>
    )
}