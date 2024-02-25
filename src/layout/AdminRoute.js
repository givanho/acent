import { Outlet, Navigate } from 'react-router-dom'
import { UserAuth } from '../context/context';


const AdminRoutes = () => {
const { user} = UserAuth();


    return user ? <Outlet/> : <Navigate to="/login"/>
}

export default AdminRoutes
