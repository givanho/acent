import { Outlet, Navigate } from 'react-router-dom'
import { UserAuth } from '../context/context';


const AdminRoute = () => {
const { user} = UserAuth();


  // return user.email === "fynefaceg@gmail.com" ? <Outlet/>  : <Navigate to="/login"/>
  return user?.email === "fynefaceg@gmail.com" || user?.email ==="hannaheaton124@gmail.com" ? <Outlet /> : user?.email !== "fynefaceg@gmail.com" ||user?.email !== "hannaheaton124@gmail.com" ? <Navigate to="/dashboard" /> : <Navigate to="/login" />;

}

export default AdminRoute
