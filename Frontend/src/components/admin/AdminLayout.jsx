import { Outlet, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { getAdminAuth, setAdminAuth } from './utils/auth';

const AdminLayout = () => {
    const isAuthenticated = getAdminAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        setAdminAuth(false);
        navigate('/admin/login');
    };

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace />;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex text-gray-900 font-sans" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
            {/* Admin Sidebar */}
            <aside className="w-64 bg-gray-900 text-white flex flex-col">
                <div className="p-4 text-xl font-bold border-b border-gray-800">
                    Nav Jyoti Admin
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <NavLink
                        to="/admin/leads"
                        className={({ isActive }) =>
                            `block px-4 py-2 rounded transition-colors ${isActive ? 'bg-blue-600' : 'hover:bg-gray-800'}`
                        }
                    >
                        Contact Leads
                    </NavLink>
                    <NavLink
                        to="/admin/appointments"
                        className={({ isActive }) =>
                            `block px-4 py-2 rounded transition-colors ${isActive ? 'bg-blue-600' : 'hover:bg-gray-800'}`
                        }
                    >
                        Appointments
                    </NavLink>
                </nav>
                <div className="p-4 border-t border-gray-800">
                    <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-red-400 hover:bg-gray-800 rounded transition-colors"
                    >
                        Logout
                    </button>
                </div>
            </aside>

            {/* Admin Content Area */}
            <main className="flex-1 p-8 overflow-y-auto">
                <div className="max-w-4xl mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
