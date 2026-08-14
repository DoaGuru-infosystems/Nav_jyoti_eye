import { Navigate, useLocation } from 'react-router-dom';
import { getAdminAuth } from './utils/auth';

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const isAuthenticated = getAdminAuth();

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;
